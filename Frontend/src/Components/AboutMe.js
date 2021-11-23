import React, { useState } from "react";
import "../Css/AboutMe.css";
import me from "../Assets/Images/dani2.jpg";
import Cv from "../Assets/Docs/CVES.pdf";

export default function AboutMe() {
  const [showPersonal, setShowPersonal] = useState(false);
  const handleSetShowPersonal = (newShowPersonal) => {
    setShowPersonal(newShowPersonal);
  };
  return (
    <>
      <div className="about_wrapper" id="about">
        <div className="about_title">
          <h1>About me</h1>
          <h5>SOME BACKGROUND ABOUT ME</h5>
        </div>
        <div className="about_content">
          <div className="my_info">
            <h4
              className={
                showPersonal
                  ? "show_personal default_cursor"
                  : "hide_personal default_cursor"
              }
              onMouseOver={() => handleSetShowPersonal(true)}
            >
              Im also a:
            </h4>
            <ul
              onMouseOver={() => handleSetShowPersonal(true)}
              className={
                showPersonal
                  ? "show_personal default_cursor personal_list"
                  : "hide_personal default_cursor personal_list"
              }
            >
              <li>Dog Lover</li>
              <li>Casual Gamer</li>
              <li>Coffe Enthusiast</li>
              <li>Cinephile</li>
              <li>Rock Fan</li>
            </ul>
            <div className="my_image">
              <img
                src={me}
                alt="Daniel Garcia"
                onMouseOver={() => handleSetShowPersonal(true)}
                onMouseLeave={() => handleSetShowPersonal(false)}
              />
            </div>
          </div>
          <div className="right_content">
            <div className="right_elements">
              <p>
                Hi, my name is Daniel Garcia, Dani for short, I'm both a
                Fullstack and a Web Developer bassed in Mendoza, Argentina.
                <br />
                <br />
                Actually I'm mostly involved in the area of Web Developping
                using React and NodeJS, having special interest in Frontend and
                UX/UI desing. Also at the moment I'm learning Angular and
                Python.
                <br />
                <br />
                Currently I'm in the search of an oportunity to join a team and
                start working to expand my horizons and gain professional
                experience.
              </p>
              <a
                type="button"
                className="btn btn-outline cv_mobile"
                href={Cv}
                rel="noreferrer"
                target="_blank"
              >
                Download Resume
              </a>
              <a
                type="button"
                className="btn btn-outline btn_cv"
                href={Cv}
                rel="noreferrer"
                target="_blank"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
