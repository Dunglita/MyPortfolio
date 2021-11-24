import React, { useState } from "react";
import "../Css/ProyectCardMobile.css";
export default function Card(props) {
  function openTab(e) {
    e.preventDefault();
    window.open(props.link, "_blank");
  }
  const [cardHover, setCardHover] = useState(false);
  const handleCardHover = (newHover) => {
    setCardHover(newHover);
  };
  return (
    <div className="proyect_card_mobile">
      <img src={props.image} className="card_image" alt="" />
      <div className={cardHover ? "card_overlay_hover" : "card_overlay_mobile"}>
        <div className={cardHover ? "card_header_hover" : "card_header_mobile"}>
          <div>
            <h3 className="card_title">{props.tag}</h3>
            <button
              className="btn btn-outline proyect_card_btn"
              onClick={() => handleCardHover(!cardHover)}
            >
              <i
                className={
                  cardHover
                    ? "bi bi-chevron-compact-down"
                    : "bi bi-chevron-compact-up"
                }
              ></i>
            </button>
          </div>
        </div>

        <p
          className={
            cardHover ? "card_description_hover" : "card_description_mobile"
          }
        >
          {props.detail}
        </p>
        <a href="{}" className="go_to_proyect" onClick={(e) => openTab(e)}>
          <p>Go to Project</p>
        </a>
      </div>
    </div>
  );
}
