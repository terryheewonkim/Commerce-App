import React from "react";
import styled from "styled-components";

const AddItemButtons = () => {
  return (
    <Container>
      <CartButton>CART</CartButton>
      <BuyNowButton>BUY NOW</BuyNowButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const CartButton = styled.span`
  width: 7rem;
  padding: 1rem 0;
  text-align: center;
  font-weight: 700;
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    background-color: #faa0a0;
    border: 2px solid #bb3b3b;
  }
`;

const BuyNowButton = styled(CartButton)`
  background-color: #333;
  color: #fff;
  &:hover {
    color: #333;
  }
`;

export default AddItemButtons;
