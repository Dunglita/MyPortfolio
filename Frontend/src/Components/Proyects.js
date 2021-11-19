import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import "../Css/Proyects.css";
import Card from "./Card";
import data from "../Assets/Json/Proyects.json";
export default function Proyects() {
  const [proyects, setProyects] = useState([]);
  useEffect(getProyects, []);
  function getProyects() {
    setProyects(data);
  }
  function getCards() {
    const cards = proyects.map((proyect) => {
      return (
        <>
          <Fade>
            <Card
              title={proyect.title}
              description={proyect.description}
              link={proyect.link}
              image={proyect.image}
              detail={proyect.detail}
              tag={proyect.tag}
            />
          </Fade>
        </>
      );
    });
    return cards;
  }
  return (
    <div className="proyects_wrapper" id="my-proyects">
      <div className="proyects_title">
        <h1>Proyects</h1>
        <h5>SAMPLES OF SOME OF MY WORK</h5>
      </div>
      <div className="proyects_container">{getCards()}</div>
    </div>
  );
}
