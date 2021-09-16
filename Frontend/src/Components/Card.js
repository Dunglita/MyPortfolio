import React from "react";
import "../Css/Card.scss";
export default function Card(props) {
  const style = {
    backgroundColor: props.color,
  };
  function buttonOver() {
    props.handleShowDetail(true);
    props.handleProyectDetail(props.detail);
    props.handleDetailColor(props.color);
    props.handleSetDetailTag(props.tag);
  }
  return (
    <div className="card-wrapper">
      <div class="card-container">
        <div class="card">
          <h2>{props.title}</h2>
          <i
            class="fas fa-arrow-right"
            title="Go to Proyect"
            onMouseOver={() => buttonOver()}
            onClick={() => window.open(props.link, "_blank")}
          ></i>
          <p>{props.description}</p>
          <div class="pic">
            <img src={props.image} alt="img" />
          </div>
          <button
            style={style}
            title="Go to Proyect"
            onClick={() => window.open(props.link, "_blank")}
            onMouseOver={() => buttonOver()}
            onMouseOut={() => props.handleShowDetail(false)}
          ></button>
        </div>
      </div>
    </div>
  );
}
