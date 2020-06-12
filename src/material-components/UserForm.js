import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const UserForm  = props =>{
    return (
        <Container fluid>
            <Row className="mb-3">
                <Col sx={12} sm={6} md={4}>
                    <Card>
                        <Card.Img variant="top" src="images/photo1.jpg"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>This is some text within a card body</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sx={12} sm={6} md={4}>
                    <Card>
                        <Card.Img variant="top" src="images/photo1.jpg"/>
                        <Card.Body>
                            his is some text within a card body
                        </Card.Body>
                        <Card.Footer>Card Footer</Card.Footer>
                    </Card>
                </Col>
                <Col sx={12} sm={6} md={4}>
                    <Card>
                        <Card.Img variant="top" src="images/photo1.jpg"/>
                        <Card.Body>
                            his is some text within a card body
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={{span:6,offset: 3}}>
                    <Button variant="outline-primary" block>Primary</Button>{' '}
                    <Button variant="outline-success" block>Success</Button>{' '}
                    <Button variant="danger" block>Danger</Button>
                    <Button variant="outline-primary" block>Primary</Button>{' '}
                    <Button variant="outline-success" block>Success</Button>{' '}
                    <Button variant="danger" block>Danger</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default UserForm
