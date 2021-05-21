import React from "react";

const Form = ({values, update, submit}) => {

  const onChange = (event) => {
    const {name, type, value, checked} = event.target;
    let valueToUse = (type === "checkbox") ?
        checked :
        (type === "number") ?
          parseInt(value, 10) :
          value;
    update(name, valueToUse);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <main className="form-container">
      <h4>Build Your Own Pizza</h4>
      <div role="img" aria-label="A picture of delicious pizza" className="pizza-form-image"></div>
      <form id="pizza-form" onSubmit={onSubmit}>
        <h3>Build Your Own Pizza</h3>
        <div className="form-section">
          <h5>Name</h5>
          <input onChange={onChange} type="text" name="name" value={values.name} id="name-input"/>
        </div>
        <div className="form-section">
          <h5>Choice of Size</h5>
          <select onChange={onChange} id="size-dropdown" value={values.size} name="size">
            <option value="">Select</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="super-large">Super-Large</option>
          </select>
        </div>
        <div className="form-section">
          <h5>Choice of Sauce</h5>
          <label>
            <input onChange={onChange} checked={values.sauce === "original red"} value="original red" type="radio" name="sauce"/>
            Original Red
          </label>
          <label>
            <input onChange={onChange} checked={values.sauce === "garlic ranch"} value="garlic ranch" type="radio" name="sauce"/>
            Garlic Ranch
          </label>
          <label>
            <input onChange={onChange} checked={values.sauce === "bbq sauce"} value="bbq sauce" type="radio" name="sauce"/>
            BBQ Sauce
          </label>
          <label>
            <input onChange={onChange} checked={values.sauce === "spinach alfredo"} value="spinach alfredo" type="radio" name="sauce"/>
            Spinach Alfredo
          </label>
        </div>
        <div className="form-section">
          <h5>Add Toppings</h5>
          <label>
            <input onChange={onChange} checked={values.pepperoni} type="checkbox" name="pepperoni"/>
            Pepperoni
          </label>
          <label>
            <input onChange={onChange} checked={values.sausage} type="checkbox" name="sausage"/>
            Sausage
          </label>
          <label>
            <input onChange={onChange} checked={values.canadianBacon} type="checkbox" name="canadianBacon"/>
            Canadian Bacon
          </label>
          <label>
            <input onChange={onChange} checked={values.spicySausage} type="checkbox" name="spicySausage"/>
            Spicy Italian Sausage
          </label>
          <label>
            <input onChange={onChange} checked={values.grilledChicken} type="checkbox" name="grilledChicken"/>
            Grilled Chicken
          </label>
          <label>
            <input onChange={onChange} checked={values.onions} type="checkbox" name="onions"/>
            Onions
          </label>
          <label>
            <input onChange={onChange} checked={values.greenPepper} type="checkbox" name="greenPepper"/>
            Green Pepper
          </label>
          <label>
            <input onChange={onChange} checked={values.dicedTomatoes} type="checkbox" name="dicedTomatoes"/>
            Diced Tomatoes
          </label>
          <label>
            <input onChange={onChange} checked={values.blackOlives} type="checkbox" name="blackOlives"/>
            Black Olives
          </label>
          <label>
            <input onChange={onChange} checked={values.roastedGarlic} type="checkbox" name="roastedGarlic"/>
            Roasted Garlic
          </label>
          <label>
            <input onChange={onChange} checked={values.artichokeHearts} type="checkbox" name="artichokeHearts"/>
            Artichoke Hearts
          </label>
          <label>
            <input onChange={onChange} checked={values.threeCheese} type="checkbox" name="threeCheese"/>
            Three Cheese
          </label>
          <label>
            <input onChange={onChange} checked={values.pineapple} type="checkbox" name="pineapple"/>
            Pineapple
          </label>
          <label>
            <input onChange={onChange} checked={values.extraCheese} type="checkbox" name="extraCheese"/>
            Extra Cheese
          </label>
        </div>
        <div className="form-section">
          <h5>Choice of Substitute</h5>
          {/* <input type="checkbox" checked={true}/> */}
          {/* {replace with toggle component} */}
        </div>
        <div className="form-section">
          <h5>Special Instructions</h5>
          <input onChange={onChange} value={values.special} type="text" name="special" id="special-text" placeholder="Anything else you'd like to add?"/>
        </div>
        <div className="form-end">
          <input onChange={onChange} value={values.orderAmt} name="orderAmt" type="number" min="0"/>
          <button id="order-button">Add to Order CALCULATED_PRICE</button>
        </div>
      </form>
    </main>
  );
};

export default Form;
