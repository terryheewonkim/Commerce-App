import React, { useState, useContext } from "react";
import styled from "styled-components";
// components
import { CartContext } from "../../store/cart-context";

const CartListItem = ({ prodId, prodImgUrl, prodName, prodPrice, amount }) => {
  const CartCtx = useContext(CartContext);
  const [finalAmount, setFinalAmount] = useState(amount);

  // HANDLERS
  const plusClickHandler = () => {
    setFinalAmount(finalAmount + 1);
    CartCtx.addItem({ prodId, amount: 1, prodPrice, prodImgUrl, prodName });
  };

  const minusClickHandler = () => {
    setFinalAmount(finalAmount - 1);
    CartCtx.removeItem(prodId);
  };

  const deleteClickHandler = () => {
    CartCtx.deleteItem(prodId);
  };

  return (
    <ItemsWrapper>
      <CartImage>
        <img src={prodImgUrl} alt="" />
      </CartImage>
      <ItemDetail>
        <p>{prodName}</p>
        <span>₩ {(+prodPrice).toLocaleString()}</span>
      </ItemDetail>
      <ButtonsContainer>
        <Button onClick={minusClickHandler}>-</Button>
        <span>{finalAmount}</span>
        <Button onClick={plusClickHandler}>+</Button>
      </ButtonsContainer>
      <ItemTotalPrice>
        <p>Total</p>
        <p>₩ {(+prodPrice * amount).toLocaleString()}</p>
      </ItemTotalPrice>
      <DeleteButton onClick={deleteClickHandler}>DELETE</DeleteButton>
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
