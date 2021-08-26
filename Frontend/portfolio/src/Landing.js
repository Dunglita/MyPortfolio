import "./Css/Landing.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Content from "./Components/Content";
import NavigationBar from "./Components/Navbar";
export default function Landing() {
  return (
    <BrowserRouter>
      <Switch>
        <NavigationBar />
        <Content />
        <h1> Hola mundo</h1>
      </Switch>
    </BrowserRouter>
  );
}
