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
  display: flex;
`;

const Logo = styled.h2`
  font-family: "LuamRegular";
`;

export default NavBar;
