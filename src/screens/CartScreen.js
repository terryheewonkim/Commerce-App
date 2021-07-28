import React, { useContext } from "react";
import styled from "styled-components";
// components
import { CartListItem } from "../components/Content";
import { CartContext } from "../store/cart-context";

const CartScreen = () => {
  const CartCtx = useContext(CartContext);

  return (
    <>
      <Title>YOUR CART</Title>
      <Wrapper>
        <ItemsWrapper>
          {CartCtx.items.map((item) => (
            <CartListItem
              key={item.prodId}
              prodId={item.prodId}
              prodImgUrl={item.prodImgUrl}
              prodName={item.prodName}
              prodPrice={item.prodPrice}
              amount={item.amount}
            />
          ))}
        </ItemsWrapper>
        <PurchaseDetailsWrapper>
          <h2>Purchase Details</h2>
          <ul>
            {CartCtx.items.map((item) => (
              <Item key={item.prodId}>
                <p>{item.prodName}</p>
                <span>x {item.amount}</span>
                <span>
                  ₩ {(+item.prodPrice * item.amount).toLocaleString()}
                </span>
              </Item>
            ))}
          </ul>
          <TotalPrice>
            <h3>Total: </h3>
            <p>₩ {CartCtx.totalPrice.toLocaleString()}</p>
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
    margin-bottom: 2rem;
  }
`;

const Item = styled.li`
  margin-bottom: 1rem;
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
