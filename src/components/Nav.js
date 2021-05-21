import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <header>
      <h1>Lambda Eats</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav
