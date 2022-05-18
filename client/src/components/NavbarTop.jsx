import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function NavbarTop(props) {
    return (
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Realtime chat-app</Navbar.Brand>
    <Nav className=" float-right">
      <Nav.Link href="#home">Login</Nav.Link>
      <Nav.Link href="#features">Signup</Nav.Link>
      <Nav.Link href="#pricing">Logout</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    );
}

export default NavbarTop;