import React from "react";
import "../Css/Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Footer() {
  function goToSocial(e, info) {
    e.preventDefault();
    window.open(info, "_blank");
  }
  return (
    <>
      <div className="footer_wrapper">
        <div className="footer_container">
          <Container fluid className="social_container">
            <Container fluid>
              <Row>
                <Col>
                  <h1>Still looking for something?</h1>
                </Col>
              </Row>
            </Container>
            <Container fluid className="sociales">
              <div className="icon_container">
                <a
                  href="notFound.html"
                  onClick={(e) => goToSocial(e, "https://github.com/Dunglita")}
                >
                  <i className="social_icon bi-github"></i>
                </a>
              </div>
              <div className="icon_container">
                <a
                  href="notFound.html"
                  onClick={(e) =>
                    goToSocial(e, "https://www.linkedin.com/in/-danigarcia/")
                  }
                >
                  <i className="social_icon bi-linkedin"></i>
                </a>
              </div>
              <div className="icon_container">
                <a
                  href="notFound.html"
                  onClick={(e) =>
                    goToSocial(e, "https://www.instagram.com/_danigarcia1/")
                  }
                >
                  <i className="social_icon bi-instagram"></i>
                </a>
              </div>
              <div className="icon_container">
                <a
                  href="notFound.html"
                  onClick={(e) =>
                    goToSocial(
                      e,
                      "https://wa.me/5492616681830/?text=Hola,%20contactame%20en%20whatsapp."
                    )
                  }
                >
                  <i className="social_icon bi-whatsapp"></i>
                </a>
              </div>
            </Container>
          </Container>
          <button
            className="btn btn-outline btn_totop"
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Back to Top
          </button>
        </div>
      </div>
    </>
  );
}
