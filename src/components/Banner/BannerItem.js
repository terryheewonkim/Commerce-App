import React from "react";
import styled from "styled-components";

const BannerItem = () => {
  return (
    <View>
      <BannerImage src="" alt="" />
    </View>
  );
};

const View = styled.div`
  width: 100%;
  height: 30vh;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 30vh;
`;

export default BannerItem;
