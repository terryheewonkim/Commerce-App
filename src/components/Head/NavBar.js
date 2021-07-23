import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { NavMenu, CartBar } from ".";

const NavBar = () => {
  return (
    <Container>
      <NavMenu />
      <Logo to="/">SHOPFLEX</Logo>
      <CartBar />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 2.5%;
  width: 95%;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 30;
  background-color: rgba(255, 255, 255, 0.95);
`;

const Logo = styled(Link)`
  width: 30vw;
  text-decoration: none;
  color: #333;
  font-family: "AcquireRegular";
  text-align: center;
  font-size: 2rem;
`;

export default NavBar;
