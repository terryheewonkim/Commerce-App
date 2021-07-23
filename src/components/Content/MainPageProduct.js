import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import AddItemButtons from "./AddItemButtons";

const MainPageProduct = ({ src, title, price }) => {
  const history = useHistory();

  return (
    <Wrapper>
      <ProductWrapper
        onClick={() => {
          history.push("/product/detail");
        }}
      >
        <img src={src} alt="" />
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>₩ {price.toLocaleString()}</ProductPrice>
      </ProductWrapper>
      <AddItemButtons />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  width: 22rem;
  padding: 1rem;
  transition: all 0.25s ease;
  &:hover {
    box-shadow: 3px 5px 18px 3px rgba(0, 0, 0, 0.5);
  }
`;

const ProductWrapper = styled.div`
  margin-bottom: 1rem;
  cursor: pointer;
  img {
    width: 100%;
  }
`;

const ProductTitle = styled.span`
  display: block;
  height: 3rem;
  font-size: 0.9rem;
`;

const ProductPrice = styled.span`
  display: block;
  font-size: 1.1rem;
  font-weight: bold;
`;

export default MainPageProduct;
