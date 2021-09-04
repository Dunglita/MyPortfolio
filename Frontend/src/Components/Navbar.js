import React from "react";
import "../Css/Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="../Assets/Images/dani.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Dani Garcia"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="/Cv">CV</Nav.Link>
            <Nav.Link href="/Proyect">Proyectos</Nav.Link>
            <Nav.Link href="/AboutMe">Sobre mi</Nav.Link>
            <Nav.Link href="/Contact">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
