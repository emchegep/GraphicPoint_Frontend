import React, {useEffect, useState} from "react";
import {useHttpClient} from "../../shared/hooks/http-hook";
import DesignList from "../components/DesignList";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Designs = props =>{

    const [loadedProducts, setLoadedProducts] = useState([])

    const {isLoading, error, sendRequest} = useHttpClient()

    useEffect(()=>{
        const fetchProducts = async () =>{
            try {
                const responseData = await sendRequest('http://localhost:5000/api/products')
                setLoadedProducts(responseData.products)
            }catch (err) {
            }
        }
        fetchProducts()
    },[sendRequest])
    return (
        <React.Fragment>
            {error && (<Modal>
                <Modal.Body>
                    <p>Error Retrieving designs.TRy again later</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">Ok</Button>
                </Modal.Footer>
            </Modal>)}
            {isLoading && (
                <Container style={{marginTop: '60px'}}>
                    <Row>
                        <Col xs={12} sm={{span:6,offset:3}} md={{span: 4, offset:4}}>
                            <Spinner animation="border" variant="primary" role="status"/>
                        </Col>
                    </Row>
                </Container>
                )}
            {!isLoading && loadedProducts && <DesignList products={loadedProducts}/>}
        </React.Fragment>
    )

}

export default Designs
