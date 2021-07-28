import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// components
import LikeButton from "./LikeButton";
import AddItemButtons from "./AddItemButtons";

const InnerPageProduct = ({ src, title, price, prodId, prodTypeName }) => {
  const history = useHistory();

  return (
    <Wrapper>
      <ProductWrapper
        onClick={() => {
          history.push(`/products/detail/${prodTypeName}/${prodId}`);
        }}
      >
        <img src={src} alt="" />
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>₩ {(+price).toLocaleString()}</ProductPrice>
        <LikeButton />
      </ProductWrapper>
      <AddItemButtons
        prodId={prodId}
        amount={1}
        prodPrice={price}
        prodImgUrl={src}
        prodName={title}
      />
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
  letter-spacing: 0.5px;
`;

export default InnerPageProduct;
