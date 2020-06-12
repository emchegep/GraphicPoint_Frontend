import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import DesignItem from "./DesignItem";
import SecondaryNavigation from "../../shared/navigation/SecondaryNavigation";

const DesignList = props =>{
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
            <SecondaryNavigation/>
        <Container  className="mt-3">
            <Row  className="mb-3">
                <Col>
                    <h4>Find Quality Professional Designs</h4>
                </Col>
            </Row>
            <Row>
                {
                    props.products.map(product =>(
                        <Col xs={12} key={product.id}>
                            <h4>{product.title}</h4>
                            <Row>
                                {
                                    product.products.map(prod=>(
                                        <Col xs={12} sm={6} md={3} key={prod.id} className="mb-3">
                                        <DesignItem
                                            id={prod.id}
                                            title={prod.title}
                                            description={prod.description}
                                            image={prod.image}
                                            price={prod.price}
                                        />
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Col>
                        )

                    )
                }
            </Row>
        </Container>
        </React.Fragment>
    )
}
export default DesignList
