import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
