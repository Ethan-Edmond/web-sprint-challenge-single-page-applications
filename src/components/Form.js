import React from "react";
import styled from "styled-components";
import bgImage from "../Assets/Pizza.jpg";

const FormMain = styled.main`
  width: 55%;
  background: white;
  margin: 0 auto 2rem;
  border: 1px solid #808080;
  border-radius: 5px;
`;

const MainTitle = styled.h4`
  text-align: center;
  margin: 0.3rem 0;
  font-weight: 500;
`;

const MainImage = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  width: 100%;
  height: 11rem;
  border: 1px solid #606060;
  border-width: 1px 0;
`;

const FormTitle = styled.h3`
  padding: 0 1rem;
  font-weight: 500;
  margin: 1rem 0 0.5rem;
  font-size: 1.1rem;
`;

const FormSection = styled.div`
`;

const TitlesNErrors = styled.div`
  background: #e0e0e0;
  padding: 0.5rem 1rem;
  overflow: auto;
`;

const InputTitle = styled.h5`
  margin: 0;
  font-size: 1.1rem;
`;

const FormError = styled.p`
  margin: 0;
  color: red;
`;

const InputContainer = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  &.checkbox-container {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FormEnd = styled.div`
  display: flex;
  padding: 1.2rem 1rem 1rem;
  justify-content: space-between;
  border: 1px solid #808080;
  border-width: 1px 0 0;
  margin-top: 0.4rem;
`;

const CheckContainer = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
`;

const Form = ({values, errors, update, submit, disabled}) => {

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
    <FormMain className="form-container">
      <MainTitle>Build Your Own Pizza</MainTitle>
      <MainImage role="img" aria-label="A picture of delicious pizza" className="pizza-form-image"></MainImage>
      <form id="pizza-form" onSubmit={onSubmit}>
        <FormTitle>Build Your Own Pizza</FormTitle>
        <FormSection>
          <TitlesNErrors>
            <InputTitle>Name</InputTitle>
            {!!errors.name.length && <FormError>{errors.name}</FormError>}
          </TitlesNErrors>
          <InputContainer>
            <input onChange={onChange} type="text" name="name" value={values.name} id="name-input"/>
          </InputContainer>
        </FormSection>
        <FormSection>
          <TitlesNErrors>
            <InputTitle>Choice of Size</InputTitle>
          </TitlesNErrors>
          <InputContainer>
            <select onChange={onChange} id="size-dropdown" value={values.size} name="size">
              <option value="">Select</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="super-large">Super-Large</option>
            </select>
          </InputContainer>
        </FormSection>
        <FormSection>
          <TitlesNErrors>
            <InputTitle>Choice of Sauce</InputTitle>
          </TitlesNErrors>
          <InputContainer>
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
          </InputContainer>
        </FormSection>
        <FormSection>
          <TitlesNErrors>
            <InputTitle>Add Toppings</InputTitle>
          </TitlesNErrors>
          <InputContainer className="checkbox-container">
            <CheckContainer>
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
            </CheckContainer>
            <CheckContainer>
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
            </CheckContainer>
          </InputContainer>
        </FormSection>
        {/* <FormSection> */}
        {/*   <TitlesNErrors> */}
        {/*     <InputTitle>Choice of Substitute</InputTitle> */}
        {/*   </TitlesNErrors> */}
        {/*   {/\* <input type="checkbox" checked={true}/> *\/} */}
        {/*   {/\* {replace with toggle component} *\/} */}
        {/* </FormSection> */}
        <FormSection>
          <TitlesNErrors>
            <InputTitle>Special Instructions</InputTitle>
          </TitlesNErrors>
          <InputContainer>
            <input onChange={onChange} value={values.special} type="text" name="special" id="special-text" placeholder="Anything else you'd like to add?"/>
          </InputContainer>
        </FormSection>
        <FormEnd>
          <input onChange={onChange} value={values.orderAmt} name="orderAmt" type="number" min="0"/>
          <button disabled={disabled} id="order-button">Add to Order CALCULATED_PRICE</button>
        </FormEnd>
      </form>
    </FormMain>
  );
};

export default Form;
