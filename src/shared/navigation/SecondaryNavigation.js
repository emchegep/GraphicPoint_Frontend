import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import './SecondaryNavigation.css'



const SecondaryNavigation = props =>{
   return (
       <Navbar style={{marginTop: '50px',backgroundColor: 'black'}}>
           <Container>
               <Nav>
                   <Nav.Link style={{color:'white'}}>Get Support</Nav.Link>
                   <Nav.Link style={{color:'white'}}>Fees and Charges</Nav.Link>
                   <Nav.Link style={{color:'white'}}>Frequently Asked Questions</Nav.Link>
               </Nav>
           </Container>
       </Navbar>
   )
}
export default SecondaryNavigation
