import "./Css/Landing.css";
import "./Css/Fonts.css";
import NotFound from "./Components/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Contact from "./Components/Contact";
import Proyects from "./Components/Proyects";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Tools from "./Components/Tools";
export default function Landing() {
  const [isSpanish, setSpanish] = useState(true);

  const handleLanguage = () => {
    setSpanish(!isSpanish);
  };
  const [isActive, setActive] = useState(true);

  const handleToggleSideBar = () => {
    setActive(!isActive);
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SideBar
            handleLanguage={handleLanguage}
            isSpanish={isSpanish}
            handleToggleSideBar={handleToggleSideBar}
            isActive={isActive}
          />
          <Header />
          <Fade>
            <AboutMe />
          </Fade>
          <Fade>
            <Proyects />
          </Fade>
          <Fade>
            <Skills />
          </Fade>
          <Fade>
            <Tools />
          </Fade>
          <Fade>
            <Contact />
          </Fade>
          <Footer />
        </Route>
        <NotFound vinculo={"/"} />
      </Switch>
    </BrowserRouter>
  );
}
