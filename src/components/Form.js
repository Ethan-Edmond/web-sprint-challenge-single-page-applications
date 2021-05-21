import React from "react";

const Form = ({values}) => {

  const onChange = (event) => {
    const {name, type, value, checked} = event.type;

  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="form-container">
      <h4>Build Your Own Pizza</h4>
      <div role="img" aria-label="A picture of delicious pizza" className="pizza-form-image"></div>
      <form id="pizza-form" onSubmit={onSubmit}>
        <h3>Build Your Own Pizza</h3>
        <div className="form-section">
          <h5>Name</h5>
          <input type="text" name="name"/>
        </div>
        <div className="form-section">
          <h5>Choice of Size</h5>
          <select id="size-dropdown">
            <option>Select</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>Super-Large</option>
          </select>
        </div>
        <div className="form-section">
          <h5>Choice of Sauce</h5>
          <label>
            <input type="radio" name="sauce"/>
            Original Red
          </label>
          <label>
            <input type="radio" name="sauce"/>
            Garlic Ranch
          </label>
          <label>
            <input type="radio" name="sauce"/>
            BBQ Sauce
          </label>
          <label>
            <input type="radio" name="sauce"/>
            Spinach Alfredo
          </label>
        </div>
        <div className="form-section">
          <h5>Add Toppings</h5>
          <label>
            <input type="checkbox"/>
            Pepperoni
          </label>
          <label>
            <input type="checkbox"/>
            Sausage
          </label>
          <label>
            <input type="checkbox"/>
            Canadian Bacon
          </label>
          <label>
            <input type="checkbox"/>
            Spicy Italian Sausage
          </label>
          <label>
            <input type="checkbox"/>
            Grilled Chicken
          </label>
          <label>
            <input type="checkbox"/>
            Onions
          </label>
          <label>
            <input type="checkbox"/>
            Green Pepper
          </label>
          <label>
            <input type="checkbox"/>
            Diced Tomatoes
          </label>
          <label>
            <input type="checkbox"/>
            Black Olives
          </label>
          <label>
            <input type="checkbox"/>
            Roasted Garlic
          </label>
          <label>
            <input type="checkbox"/>
            Artichoke Hearts
          </label>
          <label>
            <input type="checkbox"/>
            Three Cheese
          </label>
          <label>
            <input type="checkbox"/>
            Pineapple
          </label>
          <label>
            <input type="checkbox"/>
            Extra Cheese
          </label>
        </div>
        <div className="form-section">
          <h5>Choice of Substitute</h5>
          <input type="checkbox" checked={true}/>
          {/* {replace with toggle component} */}
        </div>
        <div className="form-section">
          <h5>Special Instructions</h5>
          <input type="text" id="special-text" placeholder="Anything else you'd like to add?"/>
        </div>
        <div className="form-end">
          <input type="number" min="0"/>
          <button id="order-button">Add to Order CALCULATED_PRICE</button>
        </div>
      </form>
    </main>
  );
};

export default Form;
