import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
// images
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import banner4 from "../../assets/banner4.png";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const BannerGroup = () => {
  return (
    <BannerView navigation pagination={{ clickable: true }} loop={true} autoplay={{ delay: 4000 }}>
      <SwiperSlide>
        <BannerItem>
          <img src={banner1} alt="" />
        </BannerItem>
      </SwiperSlide>
      <SwiperSlide>
        <BannerItem>
          <img src={banner2} alt="" />
        </BannerItem>
      </SwiperSlide>
      <SwiperSlide>
        <BannerItem>
          <img src={banner3} alt="" />
        </BannerItem>
      </SwiperSlide>
      <SwiperSlide>
        <BannerItem>
          <img src={banner4} alt="" />
        </BannerItem>
      </SwiperSlide>
    </BannerView>
  );
};

const BannerView = styled(Swiper)`
  height: 45vh;
  width: 80%;
  margin-bottom: 2rem;
`;

const BannerItem = styled.div`
  img {
    width: 100%;
  }
`;

export default BannerGroup;
