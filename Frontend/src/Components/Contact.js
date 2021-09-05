import React, { useState } from "react";
import "../Css/Contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contact() {
  const [clipboard, setClipboard] = useState("true");
  const handleClipboard = () => {
    setClipboard(!clipboard);
  };
  const handleCheckCliplboard = () => {
    setClipboard("true");
  };
  function coptyToClipbaord(info) {
    function clippy() {
      navigator.clipboard.writeText(info);
    }
    clippy();
    handleClipboard();
  }
  return (
    <>
      <div id="contact-wrapper">
        <Container fluid id="contact-container">
          <Container fluid id="contact-container1">
            <Row>
              <Col id="contact-heading">
                <h1>Contact me</h1>
                <h5>I'AM AVAILABLE FOR WORK, FEEL FREE TO CO CONTACT ME.</h5>
              </Col>
            </Row>
          </Container>
          <Container fluid id="contact-container2">
            <Row id="contact-icon">
              <Col>
                <i class="bi bi-envelope"></i>
                <h5>Email</h5>
                <div
                  id="inli"
                  onMouseLeave={() => {
                    handleCheckCliplboard();
                  }}
                >
                  <h3 id="clipboard-container">garciadanos@gmail.com</h3>
                  <a
                    title="Copy email to ClipBoard"
                    href="javascript:;"
                    id="clipboard-btn2"
                    onClick={() => coptyToClipbaord("garciadanos@gmail.com")}
                  >
                    <h3 id="clipboard-container">
                      <i
                        className={
                          clipboard ? "bi bi-clipboard" : "bi bi-check-lg"
                        }
                      ></i>
                    </h3>
                  </a>
                </div>
              </Col>
              <Col>
                <i class="bi bi-phone"></i>
                <h5>Phone</h5>
                <div
                  id="inli"
                  onMouseLeave={() => {
                    handleCheckCliplboard();
                  }}
                >
                  <h3>+5492616681830</h3>
                  <a
                    title="Copy phone to ClipBoard"
                    href="javascript:;"
                    id="clipboard-btn1"
                    onClick={() => coptyToClipbaord("+5492616681830")}
                  >
                    <h3 id="clipboard-container">
                      <i
                        className={
                          clipboard ? "bi bi-clipboard" : "bi bi-check-lg"
                        }
                      ></i>
                    </h3>
                  </a>
                </div>
              </Col>
              <Col>
                <i class="bi bi-geo-alt"></i>
                <h5>Adress</h5>
                <div
                  id="inli"
                  onMouseLeave={() => {
                    handleCheckCliplboard();
                  }}
                >
                  <h3>Mendoza, Argentina</h3>
                  <a
                    title="Copy adress to ClipBoard"
                    href="javascript:;"
                    id="clipboard-btn1"
                    onClick={() =>
                      coptyToClipbaord(
                        "https://www.google.com/maps/place/Mendoza,+Argentina/"
                      )
                    }
                  >
                    <h3 id="clipboard-container">
                      <i
                        className={
                          clipboard ? "bi bi-clipboard" : "bi bi-check-lg"
                        }
                      ></i>
                    </h3>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}
