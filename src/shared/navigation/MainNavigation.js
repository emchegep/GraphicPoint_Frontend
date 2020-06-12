import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {AuthContext} from "../context/auth-context";


const MainNavigation = props =>{
    const auth = useContext(AuthContext)
    return (
        <Navbar expand="md" fixed="top" style={{backgroundColor: '#fff',boxShadow:'0 1px 6px rgba(57,73,76,.35)'}}>
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    Graphics Point
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/how-it-works">How it Works</Nav.Link>
                        <Nav.Link as={NavLink} to="/products">Browse Designs</Nav.Link>
                    </Nav>
                    <Nav>
                        {auth.isLoggedIn &&  <Nav.Link as={NavLink} to="/cart" exact>Cart</Nav.Link> }
                        {auth.isLoggedIn && <Nav.Link as={NavLink} to="/orders" exact>My Projects</Nav.Link>}
                        {!auth.isLoggedIn &&   <Nav.Link as={NavLink} to="/login" exact>Log In</Nav.Link>}
                        {!auth.isLoggedIn && <Nav.Link as={NavLink} to="/signup" exact>Sign Up</Nav.Link>}
                        {auth.isLoggedIn &&  <Button onClick={auth.logout} className="mr-2">Logout</Button>}
                        <Button variant="danger">Place Your Order</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default MainNavigation
