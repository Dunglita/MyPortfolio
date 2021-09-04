import React from "react";
import "../Css/Contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contact() {
  return (
    <>
      <div id="contact-me">
        <div id="socials">
          <Container>
            <Row id="social-col">
              <h1>My Socials</h1>
            </Row>
            <Row>
              <Col id="social-col">
                <a className="nav-link" href="https://github.com/Dunglita">
                  <i id="social-icon" className="bi-github"></i>
                </a>
              </Col>
              <Col id="social-col">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/-danigarcia/"
                >
                  <i id="social-icon" className="bi-linkedin"></i>
                </a>
              </Col>
              <Col id="social-col">
                <a
                  className="nav-link"
                  href="https://www.instagram.com/_danigarcia1/"
                >
                  <i id="social-icon" className="bi-instagram"></i>
                </a>
              </Col>
              <Col id="social-col">
                <a
                  className="nav-link"
                  href="https://wa.me/5492616681830/?text=Hola,%20contactame%20en%20whatsapp."
                >
                  <i id="social-icon" className="bi-whatsapp"></i>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="contact">
          <h1>Contact me</h1>
          <h5>I'AM AVAILABLE FOR WORK, FEEL FREE TO CO CONTACT ME.</h5>
        </div>
      </div>
    </>
  );
}
