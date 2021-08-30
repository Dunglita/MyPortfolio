import "./Css/Landing.css";
import NotFound from "./Components/NotFound";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Content from "./Components/Content";
import NavigationBar from "./Components/Navbar";
export default function Landing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <NavigationBar />
          <Content />
          <h1> Hola mundo</h1>
        </Route>
        <NotFound />
      </Switch>
    </BrowserRouter>
  );
}
