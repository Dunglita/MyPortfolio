import "./Css/Landing.css";
import NotFound from "./Components/NotFound";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import React, { useState } from "react";
import AboutMe from "./Components/AboutMe";
import Welcome from "./Components/Welcome";
import SideBar from "./Components/SideBar";
import Contact from "./Components/Contact";
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
          <Welcome />
          <AboutMe />
          <Contact />
        </Route>
        <NotFound vinculo={"/"} />
      </Switch>
    </BrowserRouter>
  );
}
