import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

const Home = (props) => {
  return (
    <main>
      <section className="hero">
        <h2>Your favorite food, delivered while coding</h2>
        <Link to="/pizza">Pizza?</Link>
      </section>
      <section className="items">
        <h3>Food Delivery in Gotham City</h3>
        {["McDonald's", "Sweetgreen", "Starbucks"].map(item => {
          return (
            <Item/>
          );})}
      </section>
    </main>
  );
};

export default Home;
