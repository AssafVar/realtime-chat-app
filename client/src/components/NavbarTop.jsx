import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import UserModal from "./modals/UserModal";
import "./navbar.css"

function NavbarTop(props) {
  const auth = useAuth();
  const [isProfileModal, setProfileModal] = useState(false);

  const handleProfile = () => {
    setProfileModal(!isProfileModal);
    console.log(isProfileModal)
  };

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Realtime chat-app</Navbar.Brand>
        {auth.user && (
          <button className="nav-button" onClick={handleProfile}>
            Profile
          </button>
        )}
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
      {
        <UserModal
          handleProfile={handleProfile}
          isProfileModal={isProfileModal}
        />
      }
    </Navbar>
  );
}

export default NavbarTop;
