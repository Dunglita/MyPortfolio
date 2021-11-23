import React, { useState } from "react";
import "../Css/Contact.css";
export default function Contact() {
  /*Switches between clipboard and check icons */
  const [clipboard, setClipboard] = useState(true);
  const handleClipboard = (newClipboard) => {
    setClipboard(newClipboard);
  };
  function coptyToClipbaord(e, info) {
    e.preventDefault();
    navigator.clipboard.writeText(info);
    handleClipboard(false);
  }
  const [cardHoverMail, setCardHoverMail] = useState(false);
  const handleCardHoverMail = (newHoverMail) => {
    setCardHoverMail(newHoverMail);
  };
  const [cardHoverPhone, setCardHoverPhone] = useState(false);
  const handleCardHoverPhone = (newHoverPhone) => {
    setCardHoverPhone(newHoverPhone);
  };
  function clickMailOpen() {
    handleCardHoverMail(true);
    handleCardHoverPhone(false);
  }
  function clickPhoneOpen() {
    handleCardHoverPhone(true);
    handleCardHoverMail(false);
  }
  return (
    <>
      <div className="contact_wrapper" id="contact">
        <div className="contact_title">
          <h1>Contact</h1>
          <h5>I'AM AVAILABLE FOR WORK, FEEL FREE TO GET IN TOUCH.</h5>
        </div>
        <div className="card_container">
          <div
            className="contact_card"
            onMouseLeave={() => {
              handleClipboard(true);
            }}
          >
            <div className={cardHoverMail ? "face1 face1_mobile" : "face1"}>
              <div className="icon">
                <i className="bi-envelope"></i>
              </div>
              <button
                className="btn btn-outline mobile_btn"
                onClick={() =>
                  cardHoverMail ? handleCardHoverMail(false) : clickMailOpen()
                }
              >
                <i
                  className={
                    cardHoverMail
                      ? "bi bi-chevron-compact-up"
                      : "bi bi-chevron-compact-down"
                  }
                ></i>
              </button>
            </div>
            <div className={cardHoverMail ? " face2 face2_mobile" : "face2"}>
              <h6>Email</h6>
              <h5> garciadanos@gmail.com</h5>
              <a
                title="Copy email"
                href="Notfound.html"
                onClick={(e) => coptyToClipbaord(e, "garciadanos@gmail.com")}
              >
                <i
                  className={clipboard ? "bi bi-clipboard" : "bi bi-check-lg"}
                ></i>
              </a>
            </div>
          </div>
          <div
            className="contact_card"
            onMouseLeave={() => {
              handleClipboard(true);
            }}
          >
            <div className={cardHoverPhone ? "face1 face1_mobile" : "face1"}>
              <div className="icon">
                <i className="bi bi-phone"></i>
              </div>
              <button
                className="btn btn-outline mobile_btn"
                onClick={() =>
                  cardHoverPhone
                    ? handleCardHoverPhone(false)
                    : clickPhoneOpen()
                }
              >
                <i
                  className={
                    cardHoverPhone
                      ? "bi bi-chevron-compact-up"
                      : "bi bi-chevron-compact-down"
                  }
                ></i>
              </button>
            </div>
            <div className={cardHoverPhone ? "face2 face2_mobile" : "face2"}>
              <h6>Phone</h6>
              <h5>+5492616681830</h5>
              <a
                title="Copy phone"
                href="Notfound.html"
                onClick={(e) => coptyToClipbaord(e, "+5492616681830")}
              >
                <i
                  className={clipboard ? "bi bi-clipboard" : "bi bi-check-lg"}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
