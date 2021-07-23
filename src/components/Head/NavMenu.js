import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavMenu = () => {
  return (
    <Wrapper>
      <Menu>NEW ARRIVALS</Menu>
      <Menu>BEST SELLERS</Menu>
      <Menu>MD'S PICK</Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 30vw;
  display: flex;
  align-items: center;
`;

const Menu = styled(Link)`
  display: inline-block;
  padding: 0 1rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: #333;
`;

export default NavMenu;
