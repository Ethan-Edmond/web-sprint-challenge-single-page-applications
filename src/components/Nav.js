import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavHeader = styled.header`
  background: #eeeeee;
  overflow: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
`;

const NavTitle = styled.h1`
color: red;
font-weight: 500;
margin: 0 0 0.3rem;
font-size: 1.7rem;
`;

const StyledNav = styled.nav`
  width: 50%;
background: white;
`;

const StyledUL = styled.ul`
  list-style: none;
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
color: black;
text-decoration: none;
padding: 0.5rem 4rem;
background: white;
border: 1px solid #808080;
border-radius: 3px;
&.active {
  background: black;
  color: red;
}
&.left {
border-width: 1px 0 1px 1px;
}
`;

const Nav = (props) => {
  return (
    <NavHeader>
      <NavTitle>Lambda Eats</NavTitle>
      <StyledNav>
        <StyledUL>
          <li>
            <StyledNavLink className="left" to="/">Home</StyledNavLink>
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
