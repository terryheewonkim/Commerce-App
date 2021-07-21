import React from "react";
import styled from "styled-components";

const LogoHeader = () => {
  return (
    <Wrapper>
      <LogoView src="" alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: red;
`;

const LogoView = styled.img`
  width: 120px;
  height: 120px;
`;

export default LogoHeader;
