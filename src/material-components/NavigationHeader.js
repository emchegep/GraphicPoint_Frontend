import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/cjs/Nav";
import Container from "react-bootstrap/Container";

const NavigationHeader = props =>{
    return (
        <Navbar expand="md" style={{backgroundColor: '#fff'}} fixed="top">
            <Container>
                <Navbar.Brand href="#">
                    KintoHub
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Features</Nav.Link>
                    <Nav.Link href="#">Pricing</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#">Login</Nav.Link>
                    <Nav.Link href="#">signup</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )
}
export default NavigationHeader
