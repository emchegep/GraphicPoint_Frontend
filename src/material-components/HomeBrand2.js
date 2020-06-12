import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const HomeBrand2 = props =>{
    return (
        <Container className="mb-3">
            <Row>
                <Col md={3}>
                    <div className="text-center">
                        <h2>Build.</h2>
                        <p>Get your code on github</p>
                    </div>
                </Col>
                <Col md={{span: 3, offset: 1}}>
                    <div className="text-center">
                        <h2>Combine.</h2>
                        <p>Bring services together that make up your cloud</p>
                    </div>
                </Col>
                <Col md={{span: 3,offset: 1}}>
                    <div className="text-center">
                        <h2>Promote.</h2>
                        <p>Deploy updates to public or private.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            Launching our Appysport platform in 3 months wouldn’t have been possible without KintoHub.
                            KintoHub allowed us to focus on developing our product without worrying about
                            scalable infrastructure or deployment automation.
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={{span: 3, offset: 1}}>
                    <Card>
                        <Card.Body>
                            Launching our Appysport platform in 3 months wouldn’t have been possible without KintoHub.
                            KintoHub allowed us to focus on developing our product without worrying about
                            scalable infrastructure or deployment automation.
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={{span: 3,offset: 1}}>
                    <Card>
                        <Card.Body>
                            Launching our Appysport platform in 3 months wouldn’t have been possible without KintoHub.
                            KintoHub allowed us to focus on developing our product without worrying about
                            scalable infrastructure or deployment automation.
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default HomeBrand2
