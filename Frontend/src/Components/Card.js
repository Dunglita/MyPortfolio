import React from "react";
import "../Css/Card.css";
export default function Card(props) {
  function openTab(e) {
    e.preventDefault();
    window.open(props.link, "_blank");
  }

  return (
    <div>
      <a href="{}" className="my-card" onClick={(e) => openTab(e)}>
        <img src={props.image} class="card_image" alt="" />
        <div className="card_overlay">
          <div className="card_header">
            <svg className="card_arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <div className="card_header-text">
              <h3 className="card_title">{props.tag}</h3>
            </div>
          </div>
          <p className="card_description">{props.detail}</p>
        </div>
      </a>
    </div>
  );
}
