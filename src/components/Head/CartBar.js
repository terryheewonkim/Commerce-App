import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../../store/cart-context";

const CartBar = () => {
  const CartCtx = useContext(CartContext);
  const [isHighlighted, setIsHighlighted] = useState(false);

  let totalAmount = 0;
  CartCtx.items.map((item) => (totalAmount += item.amount));

  useEffect(() => {
    setIsHighlighted(true);
    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);

    // If button is ever removed, or if we rapidly add one item after another, we want to clear the old timer and make sure a new timer is set
    return () => {
      clearTimeout(timer);
    };
  }, [totalAmount]);

  return (
    <Container>
      <Wrapper
        to="/cart"
        style={{ animation: isHighlighted ? "bump 300ms ease-out" : "" }}
      >
        <FontAwesomeIcon icon={faShoppingCart} size="sm" />
        <span>CART</span>
        <CountText>{totalAmount}</CountText>
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
  border: 2px solid #333;
  background-color: #333;
  color: #fff;
  border-radius: 1.5rem;
  transition: all 0.2s ease;
  &:hover {
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
    span:last-child {
      background-color: #333;
      color: #fff;
    }
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const CountText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.7rem;
  height: 1.7rem;
  background-color: #fff;
  color: #333;
  font-weight: bold;
  border-radius: 50%;
`;

export default CartBar;
