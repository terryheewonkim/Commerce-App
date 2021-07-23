import React from "react";
import styled from "styled-components";
// Components
import BannerGroup from "../components/Banner/BannerGroup";
import { MainPageProduct } from "../components/Content";
// Images
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";

const HomeScreen = () => {
  return (
    <Container>
      <BannerGroup />
      <Title>NEW ITEMS WE LOVE</Title>
      <ProductWrapper>
        <MainPageProduct src={home1} title="BDG Stella Shirt Jacket" price={109000} />
        <MainPageProduct
          src={home2}
          title="Creedence Clearwater Revival Psychedelic Tee"
          price={48000}
        />
        <MainPageProduct src={home3} title="Modelo Can Mosaic Hoodie Sweatshirt" price={85000} />
      </ProductWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 0;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default HomeScreen;
