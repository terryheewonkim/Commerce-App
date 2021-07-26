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
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
  cursor: pointer;
  transition: all 0.25s ease-out;
  &:hover {
    font-size: 1.15rem;
  }
`;

const BuyNowButton = styled(CartButton)`
  background-color: #333;
  color: #fff;
`;

export default AddItemButtons;
