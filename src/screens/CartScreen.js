import React from "react";
import styled from "styled-components";
// components
import { CartListItem } from "../components/Content";
// sample images
import home1 from "../assets/home1.jpg";

const CartScreen = () => {
  return (
    <>
      <Title>YOUR CART</Title>
      <Wrapper>
        <ItemsWrapper>
          <CartListItem src={home1} />
          <CartListItem src={home1} />
        </ItemsWrapper>
        <PurchaseDetailsWrapper>
          <h2>Purchase Details</h2>
          <ul>
            <Item>
              <p>Item Title</p>
              <span>x Number</span>
              <span>₩ 109,000</span>
            </Item>
          </ul>
          <TotalPrice>
            <h3>Total: </h3>
            <p>₩ 109,000</p>
          </TotalPrice>
        </PurchaseDetailsWrapper>
      </Wrapper>
    </>
  );
};

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 3rem;
`;

const Wrapper = styled.div`
  display: flex;
`;

const ItemsWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const PurchaseDetailsWrapper = styled.div`
  width: 30%;
  padding: 2rem 2rem;
  padding-top: 0;
  h2 {
    text-align: center;
    font-size: 1.8rem;
    margin-top: 0;
  }
  ul {
    position: relative;
    list-style: none;
    margin-bottom: 3rem;
  }
`;

const Item = styled.li`
  p {
    margin: 0 0 0.5rem 0;
  }
  span:last-child {
    position: absolute;
    right: 2rem;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  border-top: 2px solid #333;
`;

export default CartScreen;
