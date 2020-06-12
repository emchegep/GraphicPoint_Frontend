import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/cjs/Col";
import Container from "react-bootstrap/Container";

const HomeBrand1 = props =>{
    return (
        <Row style={{height: '25rem',background:'linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%)',marginTop: '50px'}}>
            <Container className="mt-5">
                <Row>
                    <Col>
                          <h1 style={{fontWeight: 700, color: 'white', fontFamily: 'stencil'}}>Develop.</h1>
                        <h1 style={{fontWeight: 700, color: 'white', fontFamily: 'stencil'}} className="pl-3">Combine.</h1>
                        <h1 style={{fontWeight: 700, color: 'white', fontFamily: 'stencil'}} className="pl-5">Promote.</h1>
                    </Col>
                </Row>
            </Container>
        </Row>
    )
}
export default HomeBrand1
