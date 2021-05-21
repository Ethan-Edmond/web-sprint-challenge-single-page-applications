import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Item from "./Item";
import bgImage from "../Assets/Pizza.jpg";

const StyledMain = styled.main`
  background: red;
  overflow: auto;
`;

const Hero = styled.section`
  overflow: auto;
  background-image: url(${bgImage});
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroTitle = styled.h2`
  font-size: 1.8rem;
  background: white;
  padding: 1rem;
  border-radius: 3px;
  font-weight: 100;
`;

const HeroLink = styled(Link)`
  background: white;
  padding: 0.6rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  font-weight: 600;
  border: 1px solid #a0a0a0;
  &:hover {
    color: white;
    background: black;
    border-color: #606060;
  }
`;

const Home = ({hero}) => {
  return (
    <StyledMain>
      <Hero className="hero">
        <HeroTitle>Your favorite food, delivered while coding</HeroTitle>
        <HeroLink to="/pizza" id="order-pizza">Pizza?</HeroLink>
      </Hero>
      <section className="items">
        <h3>Food Delivery in Gotham City</h3>
        {["McDonald's", "Sweetgreen", "Starbucks"].map(item => {
          return (
            <Item/>
          );})}
      </section>
    </StyledMain>
  );
};

export default Home;
