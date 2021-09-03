import React, { useState } from "react";
import "../Css/Sidebar.css";
import { Link } from "react-router-dom";

export default function SideBar(props) {
  return (
    <div id="sidebar" className={props.isActive ? null : "visible"}>
      <ul>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#work">WORK</a>
        </li>
        <li>
          <a href="#clients">CLIENTS</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
      <div id="sidebar-btn">
        <svg
          className={
            props.isActive ? "ham hamRotate ham4" : "ham hamRotate ham4 active"
          }
          viewBox="0 0 100 100"
          width="55"
          onClick={props.handleToggleSideBar}
        >
          <path
            class="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path class="line middle" d="m 70,50 h -40" />
          <path
            class="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>
      </div>
      <div>
        <Link to={props.language} id="idiom-link">
          ES/EN
        </Link>
      </div>
    </div>
  );
}
