import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
// components
import MainTitle from "../components/Content/MainTitle";
import { MainPageProduct } from "../components/Content";
// sample images
import new1 from "../assets/new1.jpg";
import new2 from "../assets/new2.jpg";
import new3 from "../assets/new3.jpg";

const ProductListScreen = () => {
  const params = useParams();

  return (
    <>
      <MainTitle menuTitle={params.menuTitle} />
      <ProductWrapper>
        <MainPageProduct
          src={new1}
          title="BDG Stella Shirt Jacket"
          price={109000}
        />
        <MainPageProduct
          src={new2}
          title="Creedence Clearwater Revival Psychedelic Tee"
          price={48000}
        />
        <MainPageProduct
          src={new3}
          title="Modelo Can Mosaic Hoodie Sweatshirt"
          price={85000}
        />
      </ProductWrapper>
    </>
  );
};

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default ProductListScreen;
