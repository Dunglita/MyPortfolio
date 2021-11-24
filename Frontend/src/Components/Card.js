import React from "react";
import "../Css/Card.css";
export default function Card(props) {
  function openTab(e) {
    e.preventDefault();
    window.open(props.link, "_blank");
  }

  return (
    <div>
      <a href="{}" className="proyect_card" onClick={(e) => openTab(e)}>
        <img src={props.image} className="card_image" alt="" />
        <div className="card_overlay">
          <div className="card_header">
            <svg className="card_arc" xmlns="http://www.w3.org/2000/svg">
              <path d={"M 40 80 c 22 0 40 -22 40 -40 v 40 Z"} />
            </svg>
            <div>
              <h3 className="card_title">{props.tag}</h3>
            </div>
          </div>
          <p className="card_description">{props.detail}</p>
        </div>
      </a>
    </div>
  );
}
