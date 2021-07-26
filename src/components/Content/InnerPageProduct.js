import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// components
import LikeButton from "./LikeButton";
import AddItemButtons from "./AddItemButtons";

const InnerPageProduct = ({ src, title, price }) => {
  const history = useHistory();

  return (
    <Wrapper>
      <ProductWrapper
        onClick={() => {
          history.push("/products/detail");
        }}
      >
        <img src={src} alt="" />
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>₩ {price.toLocaleString()}</ProductPrice>
        <LikeButton />
      </ProductWrapper>
      <AddItemButtons />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 16rem;
  padding: 1rem;
  position: relative;
`;

const ProductWrapper = styled.div`
  cursor: pointer;
  img {
    width: 100%;
  }
`;

const ProductTitle = styled.p`
  font-size: 0.8rem;
`;

const ProductPrice = styled.span`
  display: inline-block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export default InnerPageProduct;
