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
  display: flex;
`;

const Menu = styled(Link)`
  display: inline-block;
  padding: 1.5rem 0;
  width: 11rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  color: #333;
`;

export default NavMenu;
