import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const BannerGroup = ({ bannerList }) => {
  const history = useHistory();

  return (
    <BannerView
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 4000 }}
    >
      {bannerList.map((item, index) => {
        return (
          <SwiperSlide
            key={index.toString()}
            onClick={() => history.push(item.path)}
          >
            <BannerItem>
              {/* static경로로 기본 생성되어 있는 public폴더에 접근 */}
              {/* public 폴더에는 배포에 사용될 정적 리소스를 넣어두고 관리한다 */}
              {/* 여기서의 경로는 이미 /public 으로 시작하므로 그 다음부터의 경로를 작성한다*/}
              <img src={`/images/${item.filename}`} alt="" />
            </BannerItem>
          </SwiperSlide>
        );
      })}
    </BannerView>
  );
};

const BannerView = styled(Swiper)`
  height: 45vh;
  width: 80%;
  margin-bottom: 2rem;
`;

const BannerItem = styled.div`
  cursor: pointer;
  img {
    width: 100%;
  }
`;

export default BannerGroup;
