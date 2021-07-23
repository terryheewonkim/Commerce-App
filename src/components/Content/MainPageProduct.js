import React from "react";
import styled from "styled-components";

const MainPageProduct = ({ src, title, price }) => {
  return (
    <Wrapper>
      <ProductWrapper>
        <img src={src} alt="" />
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>₩{price.toLocaleString()}</ProductPrice>
      </ProductWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  width: 22rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    box-shadow: 3px 5px 18px 3px rgba(0, 0, 0, 0.5);
  }
`;

const ProductWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const ProductTitle = styled.span`
  display: block;
  font-size: 0.8rem;
`;

const ProductPrice = styled.span`
  display: block;
  font-weight: bold;
`;

export default MainPageProduct;
