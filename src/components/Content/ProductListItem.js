import React from "react";
import styled from "styled-components";

const ProductListItem = () => {
  return (
    <Wrapper>
      <ProductWrap>
        <ProductImg src="" alt="" />
        <ProductName>PRODUCT NAME</ProductName>
        <Price>PRICE</Price>
      </ProductWrap>
      <ButtonView>
        <LeftButton>CART</LeftButton>
        <RightButton>BUY NOW</RightButton>
      </ButtonView>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  margin: 20px;
  width: 300px;
`;

const ProductWrap = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const ProductImg = styled.img`
  width: 300px;
  height: 300px;
`;

const ProductName = styled.div`
  padding: 12px 0;
  font-size: 1rem;
  border-bottom: 1px solid #333;
`;

const Price = styled.div`
  padding: 12px 0;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: right;
`;

const ButtonView = styled.div`
  display: flex;
`;

const LeftButton = styled.span`
  display: inline-block;
  padding: 10px 0;
  width: 150px;
  border: 1px solid #333;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  background: #333;
  color: #fff;
`;

export default ProductListItem;
