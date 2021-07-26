import React from "react";
import styled from "styled-components";
// components
import AddItemButtons from "../components/Content/AddItemButtons";
import LikeButton from "../components/Content/LikeButton";
// sample image
import home1 from "../assets/home1.jpg";

const ProductDetailScreen = () => {
  const price = 109000;
  return (
    <Container>
      <ImageWrapper>
        <img src={home1} alt="" />
        <LikeButton />
      </ImageWrapper>
      <ContentWrapper>
        <h1>BDG Stella Shirt Jacket</h1>
        <Price>₩ {price.toLocaleString()}</Price>
        <p>
          Bold shirt jacket from UO’s own BDG. Structured cotton design fitted with a button placket
          and pockets at the front.
        </p>
        <ButtonsContainer>
          <MinusButton>-</MinusButton>
          <span>1</span>
          <PlusButton>+</PlusButton>
        </ButtonsContainer>
        <AddItemButtons />
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-around;
`;

const ImageWrapper = styled.div`
  width: 45%;
  height: 80vh;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentWrapper = styled.div`
  width: 45%;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.7rem;
  }
  p {
    margin-bottom: 4rem;
  }
`;

const Price = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const ButtonsContainer = styled.div`
  margin-bottom: 2rem;
  span {
    display: inline-block;
    width: 3rem;
    text-align: center;
    font-size: 1.5rem;
  }
`;

const MinusButton = styled.button`
  background: none;
  border: 2px solid #333;
  width: 3rem;
  height: 2.5rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

const PlusButton = styled(MinusButton)``;

export default ProductDetailScreen;
