import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <FooterText>&copy; TERRY KIM 2021</FooterText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 0;
  width: 100%;
`;

const FooterText = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 0.7rem;
  color: #5e5e5e;
`;

export default Footer;
