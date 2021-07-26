import React from "react";
import styled from "styled-components";

const MainTitle = ({ menuTitle }) => {
  let title;
  switch (menuTitle) {
    case "new":
      title = "OUR NEWEST ARRIVALS";
      break;
    case "best":
      title = "OUR BEST SELLERS";
      break;
    case "mdpick":
      title = "MD'S PICK FOR YOU";
      break;
    default:
      title = "";
  }

  return <Title>{title}</Title>;
};

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2.2rem;
  letter-spacing: 0.2rem;
  margin-bottom: 0.5rem;
`;

export default MainTitle;
