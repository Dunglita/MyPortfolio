import React from "react";
import "../Css/Content.css";
import Banner from "../Assets/Images/dg.png";
export default function Content() {
  return (
    <div>
      <img id="banner" src={Banner} />
      <h1>Contenido</h1>
    </div>
  );
}
