import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { CartContext } from "../../store/cart-context";

// props - prodId, amount, prodPrice
const AddItemButtons = ({
  prodId,
  amount,
  prodPrice,
  prodImgUrl,
  prodName,
}) => {
  /////////////////////////////////////////////////////
  ///////////////// TEACHER VERSION ///////////////////
  /////////////////////////////////////////////////////

  // web storage
  // localStorage : 같은 PC 같은 브라우저 ()
  // sessionStorage : 브라우저 닫히면 만료
  // 에플리케이션 전역에서 접근 가능
  // setItem("key", value);
  // getItem("key")

  // const onClickCart = () => {
  //   // {prodId : 상품번호}
  //   let newList = [];
  //   let cartList = JSON.parse(sessionStorage.getItem("cartList"));
  //   if (cartList) {
  //     // 이전에 cartList로 등록된 데이터가 있는 경우 기존의 상품과 새로 추가된 상품을 하나의 배열로 합친다
  //     // 새로운 상품을 추가하기 저에 동일한 상품이 이미 장바구니에 등록된 상태인지 확인한다
  //     // 이미 등록된 상품인 경우 수량만 증가시킨다
  //     newList = cartList.map((v) => {
  //       if (v.prodId === value.prodId) {
  //         // 중복 상품
  //         v.prodQty = v.prodQty + 1;
  //       }
  //     });
  //   }
  // };

  //////////////////////////////////////////////////////
  //////////////////// MY VERSION //////////////////////
  //////////////////////////////////////////////////////

  const CartCtx = useContext(CartContext);
  const history = useHistory();

  // HANDLERS
  const addToCartHandler = () => {
    CartCtx.addItem({ prodId, amount, prodPrice, prodImgUrl, prodName });
  };

  const buyNowHandler = () => {
    CartCtx.addItem({ prodId, amount: 1, prodPrice, prodImgUrl, prodName });
    history.push("/cart");
  };

  return (
    <Container>
      <CartButton onClick={addToCartHandler}>CART</CartButton>
      <BuyNowButton onClick={buyNowHandler}>BUY NOW</BuyNowButton>
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
