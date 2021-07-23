import React from "react";
import styled from "styled-components";

import { NavMenu, CartBar } from ".";

const NavBar = () => {
  return (
    <Container>
      <NavMenu />
      <Logo>SHOPFLEX</Logo>
      <CartBar />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 2.5%;
  width: 95%;
  height: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 30;
  background-color: rgba(255, 255, 255, 0.95);
`;

const Logo = styled.h2`
  width: 30vw;
  font-family: "AcquireRegular";
  text-align: center;
  font-size: 2rem;
`;

export default NavBar;
