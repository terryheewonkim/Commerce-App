import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartBar = () => {
  return (
    <Container>
      <Wrapper>
        <FontAwesomeIcon icon={faShoppingCart} size="sm" />
        <span>CART</span>
        <CountText>13</CountText>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 30vw;
  display: flex;
  justify-content: flex-end;
`;

const Wrapper = styled(Link)`
  width: 7rem;
  height: 3rem;
  display: flex;
  padding: 0 0.5rem;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  background-color: #333;
  color: #fff;
  border-radius: 1.5rem;
`;

const CountText = styled.span`
  font-weight: bold;
`;

export default CartBar;
