import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const ProductList = props =>{
if (props.products.length === 0){
    return (
        <Container  className="mt-5">
            <Row>
                <Col>
                    <h5>No products</h5>
                </Col>
            </Row>
        </Container>
    )
}
return (
    <React.Fragment>
    <Container  className="mt-3">
        <Row  className="mb-3">
            <Col>
                <h4>Find Quality Professional Designs</h4>
            </Col>
        </Row>
        <Row>
            {
                props.products.map(product =>(
                        <Col xs={12} sm={6} md={3} key={product.id} className="mb-3">
                            <Card>
                                <Card.Img variant="top" src="images/photo1.jpg"/>
                                <Card.Body>
                                    <Card.Title className="text-center">{product.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    )

                )
            }
        </Row>
    </Container>
    </React.Fragment>
)
}
export default ProductList
