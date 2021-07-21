import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CartBar = () => {
  return (
    <Wrapper>
      <ItemView>
        <Icon src="" alt="" />
        <ItemText>CART</ItemText>
        <CountText>13</CountText>
      </ItemView>
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  display: flex;
  flex: 1;
  flex-direction: row-reverse;
  text-decoration: none;
  color: #333;
`;

const ItemView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  width: 9.5rem;
  background: grey;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const ItemText = styled.span`
  display: inline-block;
  font-size: 1.8rem;
  font-weight: 600;
`;

const CountText = styled(ItemText)`
  background: red;
  border-radius: 10%;
`;

export default CartBar;
