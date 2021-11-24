import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import MediaQuery from "react-responsive";
import "../Css/Proyects.css";
import Card from "./Card";
import ProyectCardMobile from "./ProyectCardMobile";
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
          <MediaQuery minWidth={650}>
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
          </MediaQuery>
          <MediaQuery maxWidth={650}>
            <Fade>
              <ProyectCardMobile
                title={proyect.title}
                description={proyect.description}
                link={proyect.link}
                image={proyect.image}
                detail={proyect.detail}
                tag={proyect.tag}
              />
            </Fade>
          </MediaQuery>
        </>
      );
    });
    return cards;
  }
  return (
    <div className="proyects_wrapper" id="proyects">
      <div className="proyects_title">
        <h1>Proyects</h1>
        <h5>SAMPLES OF SOME OF MY WORK</h5>
      </div>
      <div className="proyects_container">{getCards()}</div>
    </div>
  );
}
