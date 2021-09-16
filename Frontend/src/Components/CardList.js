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
            handleShowDetail={props.handleShowDetail}
            handleProyectDetail={props.handleProyectDetail}
            handleDetailColor={props.handleDetailColor}
            handleSetDetailTag={props.handleSetDetailTag}
            title={proyect.title}
            description={proyect.description}
            link={proyect.link}
            color={proyect.color}
            image={proyect.image}
            detail={proyect.detail}
            tag={proyect.tag}
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
