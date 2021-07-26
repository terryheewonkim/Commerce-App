import React from "react";
import styled from "styled-components";

const EmptyMessage = () => {
  return <Wrapper>Item not in stock :(</Wrapper>;
};

const Wrapper = styled.div`
  padding: 40px 0;
  font-size: 24px;
  font-weight: 700;
`;

export default EmptyMessage;
