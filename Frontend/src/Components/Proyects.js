import React, { useState } from "react";
import "../Css/Proyects.css";
import CardList from "./CardList";

export default function Proyects() {
  const [showDetail, setShowDetail] = useState(false);
  const handleShowDetail = () => {
    setShowDetail(!showDetail);
  };
  const [proyectDetail, setProyectDetail] = useState("");
  const [detailColor, setDetailColor] = useState("");
  const handleDetailColor = (newDetailColor) => {
    setDetailColor(newDetailColor);
  };
  const handleProyectDetail = (newProyectDetail) => {
    setProyectDetail(newProyectDetail);
  };
  const detailBackground = {
    backgroundColor: detailColor,
  };
  return (
    <div id="proyects-wrapper">
      <div id="proyect-left-container">
        <div id="left-text">
          <h1>Proyects</h1>
          <h5>Samples of some of my work</h5>
        </div>
      </div>
      <div id="proyect-middle-container">
        <CardList
          showDetail={showDetail}
          handleShowDetail={handleShowDetail}
          proyectDetail={proyectDetail}
          handleProyectDetail={handleProyectDetail}
          handleDetailColor={handleDetailColor}
        />
      </div>
      <div id="proyect-right-container">
        <div
          style={detailBackground}
          className={showDetail ? "show-detail dot-medium" : "hide-detail"}
        >
          <div id="right-text">
            <p>{proyectDetail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
