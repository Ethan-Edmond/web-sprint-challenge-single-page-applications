import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Form from "./components/Form";
import Help from "./components/Help";

const initForm= {
  name: "",
  size: "",
  sauce: "",
  pepperoni: false,
  sausage: false,
  canadianBacon: false,
  spicySausage: false,
  grilledChicken: false,
  onions: false,
  greenPepper: false,
  dicedTomatoes: false,
  blackOlives: false,
  roastedGarlic: false,
  artichokeHearts: false,
  threeCheese: false,
  pineapple: false,
  extraCheese: false,
  special: "",
  orderAmt: 1
};

const App = () => {
  const [formValues, setFormValues] = useState(initForm);

  const formUpdate = (name, value) => {
    setFormValues({...formValues, [name]: value});
  };

  const formSubmit = () => {
    console.log(formValues);
  };

  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/help">
          <Help/>
        </Route>
        <Route path="/pizza">
          <Form values={formValues} update={formUpdate} submit={formSubmit}/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
