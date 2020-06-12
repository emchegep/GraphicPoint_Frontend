import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SecondaryNavigation from "../../shared/navigation/SecondaryNavigation";
import CartItem from "./CartItem";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CartList = props =>{
    const [subtotal, setSubtotal] = useState()
    const [total, setTotal]= useState()
    if (props.items.length === 0){
        return (
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h4>Your Cart is Empty</h4>
                    </Col>
                </Row>
            </Container>
        )
    }
    return (
        <React.Fragment>
            <Container className="mt-5">
                <Row>
                    <Col md={9}>
                        {
                            props.items.map(item =>{
                                return (
                                <Row key={item.id}>
                                <CartItem
                                    id={item.id}
                                    title={item.title}
                                    description ={item.description}
                                    quantity={item.cartItem.quantity}
                                    price ={item.price}
                                    image={item.image}
                                    onDelete={props.onDeleteCartItem}
                                />
                                </Row>
                            )})
                        }
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Body>
                                <Card.Text>TOTAL:</Card.Text>
                                <h1>Kshs. {props.quantity*props.price}</h1>
                                <Button variant="warning" block>PROCEED TO CHECKOUT</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
export default CartList
