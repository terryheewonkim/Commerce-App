import React from "react";

import { MainTitle, ProductListItem } from "../components/Content";

import styled from "styled-components";

const HomeScreen = () => {
  return (
    <Container>
      <MainTitle />
      <ProductWrapper></ProductWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 3rem 0;
  background: green;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default HomeScreen;
