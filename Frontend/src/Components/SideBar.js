import React from "react";
import "../Css/Sidebar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function SideBar(props) {
  return (
    <div className={props.isActive ? "sidebar" : "sidebar visible"}>
      <ul>
        <li>
          <HashLink smooth onClick={props.handleToggleSideBar} to="/#about">
            ABOUT
          </HashLink>
        </li>
        <li>
          <HashLink smooth onClick={props.handleToggleSideBar} to="/#proyects">
            PROYECTS
          </HashLink>
        </li>
        <li>
          <HashLink smooth onClick={props.handleToggleSideBar} to="/#skills">
            SKILLS
          </HashLink>
        </li>
        <li>
          <HashLink smooth onClick={props.handleToggleSideBar} to="/#tools">
            TOOLS
          </HashLink>
        </li>
        <li>
          <HashLink smooth onClick={props.handleToggleSideBar} to="/#contact">
            CONTACT
          </HashLink>
        </li>
      </ul>
      <div className="sidebar_btn">
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
        <Link
          to={props.isSpanish ? "/" : "/english"}
          className="idiom_link"
          onClick={props.handleLanguage}
        >
          ES/EN
        </Link>
      </div>
    </div>
  );
}
