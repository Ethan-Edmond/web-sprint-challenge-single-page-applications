import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavHeader = styled.header`
  overflow: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.55rem 2rem;
`;

const NavTitle = styled.h1`
color: red;
font-weight: 500;
margin: 0 0 0.3rem;
font-size: 1.7rem;
`;

const StyledNav = styled.nav`
  width: 50%;
`;

const StyledUL = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
`;

const StyledNavLink = styled(NavLink)`
color: black;
text-decoration: none;
padding: 0.5rem 3rem;
background: white;
border: 1px solid #808080;
border-radius: 3px;
font-weight: 600;
&.active {
  background: black;
  color: white;
}
&.left {
border-width: 1px 0 1px 1px;
}
&:hover {
  background: black;
  color: white;
}
`;

const Nav = (props) => {
  return (
    <NavHeader>
      <NavTitle>Lambda Eats</NavTitle>
      <StyledNav>
        <StyledUL>
          <li>
            <StyledNavLink className="left" exact to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/help">Help</StyledNavLink>
          </li>
        </StyledUL>
      </StyledNav>
    </NavHeader>
  );
};

export default Nav;
