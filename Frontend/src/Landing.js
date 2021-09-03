import "./Css/Landing.css";
import NotFound from "./Components/NotFound";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import React, { useState } from "react";
import AboutMe from "./Components/AboutMe";
import Content from "./Components/Content";
import SideBar from "./Components/SideBar";
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
            language={"/"}
            handleToggleSideBar={handleToggleSideBar}
            isActive={isActive}
          />
          <Content />
          <AboutMe />
        </Route>
        <NotFound vinculo={"/"} />
      </Switch>
    </BrowserRouter>
  );
}
