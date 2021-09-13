import React from "react";
import "../Css/Socials.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Socials() {
  function goToSocial(e, info) {
    e.preventDefault();
    window.open(info, "_blank");
  }
  return (
    <>
      <div id="social-wrapper">
        <Container fluid id="social-container">
          <Container fluid id="social-container1">
            <Row>
              <Col>
                <h1>Socials</h1>
              </Col>
            </Row>
          </Container>
          <Container fluid id="social-container2">
            <Row>
              <Col>
                <a
                  href="notFound.html"
                  onClick={(e) => goToSocial(e, "https://github.com/Dunglita")}
                >
                  <i id="social-icon" className="bi-github"></i>
                </a>
              </Col>
              <Col>
                <a
                  href="notFound.html"
                  onClick={(e) =>
                    goToSocial(e, "https://www.linkedin.com/in/-danigarcia/")
                  }
                >
                  <i id="social-icon" className="bi-linkedin"></i>
                </a>
              </Col>
              <Col>
                <a
                  href="notFound.html"
                  onClick={(e) =>
                    goToSocial(e, "https://www.instagram.com/_danigarcia1/")
                  }
                >
                  <i id="social-icon" className="bi-instagram"></i>
                </a>
              </Col>
              <Col>
                <a
                  href="notFound.html"
                  onClick={(e) =>
                    goToSocial(
                      e,
                      "https://wa.me/5492616681830/?text=Hola,%20contactame%20en%20whatsapp."
                    )
                  }
                >
                  <i id="social-icon" className="bi-whatsapp"></i>
                </a>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}
