import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "./Card";
import data from "../Assets/Json/Proyects.json";
import "../Css/CardList.css";
export default function CardList(props) {
  const [proyects, setProyects] = useState([]);
  useEffect(getProyects, []);
  function getProyects() {
    setProyects(data);
  }
  function getCards() {
    const cards = proyects.map((proyect) => {
      return (
        <>
          <Card
            showDetail={props.showdDtail}
            handleShowDetail={props.handleShowDetail}
            proyectDetail={props.proyectDetail}
            handleProyectDetail={props.handleProyectDetail}
            handleDetailColor={props.handleDetailColor}
            title={proyect.title}
            description={proyect.description}
            link={proyect.link}
            color={proyect.color}
            image={proyect.image}
            detail={proyect.detail}
          />
        </>
      );
    });
    return cards;
  }

  return (
    <div>
      <Row fluid id="card-row">
        <Col>{getCards()}</Col>
      </Row>
    </div>
  );
}
