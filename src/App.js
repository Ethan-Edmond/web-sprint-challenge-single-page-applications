import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Form from "./components/Form";
import Help from "./components/Help";
import formSchema from "./validation/schema";

const initForm = {
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

const initFormErrors = {
  name: "",
  size: "",
  sauce: "",
  pepperoni: "",
  sausage: "",
  canadianBacon: "",
  spicySausage: "",
  grilledChicken: "",
  onions: "",
  greenPepper: "",
  dicedTomatoes: "",
  blackOlives: "",
  roastedGarlic: "",
  artichokeHearts: "",
  threeCheese: "",
  pineapple: "",
  extraCheese: "",
  special: "",
  orderAmt: ""
};

const App = () => {
  const [formValues, setFormValues] = useState(initForm);
  const [formErrors, setFormErrors] = useState(initFormErrors);
  const [formDisabled, setFormDisabled] = useState(true);

  const formUpdate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ""}))
      .catch((error) => setFormErrors({...formErrors, [name]: error.errors}));
    setFormValues({...formValues, [name]: value});
  };

  const formSubmit = () => {
    axios.post("https://reqres.in/api/orders", {
      ...formValues,
      name: formValues.name.trim(),

    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log("ERR", err));
    setFormValues(initForm);
  };

  useEffect(() => {
    formSchema.isValid(formValues)
      .then((validity) => {
        setFormDisabled(!validity);
      })
      .catch((errors) => console.log(errors));
  }, [formValues]);

  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/help">
          <Help/>
        </Route>
        <Route path="/pizza">
          <Form
            values={formValues}
            errors={formErrors}
            update={formUpdate}
            submit={formSubmit}
            disabled={formDisabled}/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
