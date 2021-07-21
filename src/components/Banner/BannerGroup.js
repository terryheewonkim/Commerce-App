import React from "react";

import { BannerItem } from ".";

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const BannerGroup = () => {
  return (
    <BannerView>
      <SwiperSlide>
        <BannerItem />
      </SwiperSlide>
      <SwiperSlide>2번 슬라이드</SwiperSlide>
      <SwiperSlide>3번 슬라이드</SwiperSlide>
    </BannerView>
  );
};

const BannerView = styled(Swiper)`
  background: red;
  height: 30vh;
`;

export default BannerGroup;
