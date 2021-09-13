import React from "react";
import "../Css/Card.scss";
export default function Card(props) {
  const style = {
    backgroundColor: props.color,
  };
  function buttonOver() {
    props.handleShowDetail();
    props.handleProyectDetail(props.detail);
    console.log(props.detail);
    props.handleDetailColor(props.color);
  }
  return (
    <div className="card-wrapper">
      <div class="card-container">
        <div class="card">
          <h2>{props.title}</h2>
          <i class="fas fa-arrow-right"></i>
          <p>{props.description}</p>
          <div class="pic">
            <img src={props.image} alt="img" />
          </div>
          <button
            style={style}
            title="Go to Proyect"
            onClick={() => window.open(props.link, "_blank")}
            onMouseOver={() => buttonOver()}
            onMouseOut={() => props.handleShowDetail()}
          ></button>
        </div>
      </div>
    </div>
  );
}
