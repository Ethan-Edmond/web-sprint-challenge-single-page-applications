import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Form from "./components/Form";
import Help from "./components/Help";

const App = () => {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/help">
          <Help/>
        </Route>
        <Route path="/pizza">
          <Form/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
