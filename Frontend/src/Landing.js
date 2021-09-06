import "./Css/Landing.css";
import "./Css/Fonts.css";
import NotFound from "./Components/NotFound";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import React, { useState } from "react";
import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Contact from "./Components/Contact";
import Socials from "./Components/Socials";
import Proyects from "./Components/Proyects";
import Footer from "./Components/Footer";

export default function Landing() {
  const [isSpanish, setSpanish] = useState("True");

  const handleLanguage = () => {
    setSpanish(!isSpanish);
  };
  const [isActive, setActive] = useState("true");

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
          <AboutMe />
          <Proyects />
          <Socials />
          <Contact />
          <Footer />
        </Route>
        <NotFound vinculo={"/"} />
      </Switch>
    </BrowserRouter>
  );
}
