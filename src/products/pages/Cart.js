import React, {useContext, useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useHttpClient} from "../../shared/hooks/http-hook";
import {AuthContext} from "../../shared/context/auth-context";
import SecondaryNavigation from "../../shared/navigation/SecondaryNavigation";
import Spinner from "react-bootstrap/Spinner";
import DesignList from "../components/DesignList";
import CartList from "../components/CartList";
const Cart = props =>{
    const {isLoading, error, sendRequest} = useHttpClient()
    const [loadedCart,setLoadedCart] = useState()
    const auth = useContext(AuthContext)

    useEffect(()=>{
        const fetchCart = async ()=>{
            try{
                const responseData = await sendRequest('http://localhost:5000/api/customers/cart',
                    'GET',
                    {
                        Authorization:`Bearer ${auth.token}`
                    })
                setLoadedCart(responseData.products)
                console.log(responseData.products)
            } catch (err) {}
        }
        fetchCart()
    },[sendRequest])

    const cartItemDeleteHandler = (cartId)=>{
        setLoadedCart(prevCart => prevCart.filter(cart => cart.id !== cartId))
    }

    return(
        <React.Fragment>
            <SecondaryNavigation/>
            {isLoading && (
                <Container style={{marginTop: '60px'}}>
                    <Row>
                        <Col xs={12} sm={{span:6,offset:3}} md={{span: 4, offset:4}}>
                            <Spinner animation="border" variant="primary" role="status"/>
                        </Col>
                    </Row>
                </Container>
            )}
            {!isLoading && loadedCart && <CartList items={loadedCart} onDeleteCartItem={cartItemDeleteHandler}/>}
        </React.Fragment>

    )
}
export default Cart
