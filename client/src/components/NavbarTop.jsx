import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth } from "../context/AuthProvider";
import "./navbar.css"

function NavbarTop(props) {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Realtime chat-app</Navbar.Brand>
        <Nav className=" float-right">
          <Nav.Link eventKey={2}>
            {auth.user && (
              <button className="nav-button" onClick={handleLogout}>
                Logout
              </button>
            )}{" "}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;
