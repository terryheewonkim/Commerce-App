import React from "react";
import styled from "styled-components";

const CartListItem = ({ src }) => {
  return (
    <ItemsWrapper>
      <CartImage>
        <img src={src} alt="" />
      </CartImage>
      <ItemDetail>
        <p>BDG Stella Shirt Jacket</p>
        <span>₩ 109,000</span>
      </ItemDetail>
      <ButtonsContainer>
        <Button>-</Button>
        <span>3</span>
        <Button>+</Button>
      </ButtonsContainer>
      <ItemTotalPrice>
        <p>Total</p>
        <p>₩ 109,000</p>
      </ItemTotalPrice>
      <DeleteButton>DELETE</DeleteButton>
    </ItemsWrapper>
  );
};

const ItemsWrapper = styled.div`
  position: relative;
  padding: 1rem 0rem;
  display: flex;
  align-items: center;
  height: 15rem;
  width: 100%;
  border-top: 2px solid #333;
  /* border-right: 2px solid #333; */
`;

const CartImage = styled.div`
  width: 15%;
  margin-right: 2rem;
  img {
    width: 100%;
  }
`;

const ItemDetail = styled.div`
  font-size: 1.2rem;
  width: 50%;
  margin-right: 2rem;
`;

const ButtonsContainer = styled.div`
  width: 20%;
  span {
    display: inline-block;
    width: 3rem;
    text-align: center;
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  background: none;
  border: 2px solid #333;
  border-radius: 10px;
  width: 3rem;
  height: 2.5rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ItemTotalPrice = styled.div`
  width: 15%;
  text-align: center;
  font-size: 1.2rem;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  text-decoration: underline;
  cursor: pointer;
  background: none;
  border: none;
`;

export default CartListItem;
