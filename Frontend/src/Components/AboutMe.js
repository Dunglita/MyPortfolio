import React from "react";
import "../Css/AboutMe.css";
import me from "../Assets/Images/me.png";
import Cv from "../Assets/Docs/CVES.pdf";
export default function AboutMe() {
  return (
    <>
      <div className="about-me" id="about-me">
        <div id="my-image">
          <img id="me-img" src={me} alt="Daniel Garcia" />
        </div>
        <div id="right-content">
          <div id="right-elements">
            {" "}
            <h1>About me</h1>
            <p>
              Hi, my name is Daniel Garcia, Dani for short, I'm a Fullstack
              Developer bassed in Mendoza, Argentina.
              <br />
              <br />
              Actually I'm involved in the area of Web Developping using React
              and NodeJS, having special interest in Frontend and UX/UI desing.
              Also at the moment I'm learning Angular and doing a Java course.
              <br />
              <br />
              Currently I'm in the search of an oportunity to join a team and
              start working to expand my horizons and gain professional
              experience.
            </p>
            <a
              id="btn-cv"
              type="button"
              className="btn btn-outline"
              href={Cv}
              rel="noreferrer"
              target="_blank"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
