import React from "react";
import "../Css/Footer.css";
export default function Footer() {
  return (
    <div id="footer-wrapper">
      <div className="waves" id="wave1">
        <div className="cover1"></div>
      </div>
      <div className="waves" id="wave2">
        <div className="cover2"></div>
      </div>
      <div className="waves" id="wave3">
        <div className="cover3"></div>
      </div>
      <div id="footer-container">
        <div id="top-container">
          <button
            id="btn-totop"
            className="btn btn-outline"
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
          <div id="firm">
            <p>Daniel Garcia 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}
