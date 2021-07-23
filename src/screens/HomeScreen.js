import React from "react";
import styled from "styled-components";
// Components
import BannerGroup from "../components/Banner/BannerGroup";
import { MainPageProduct } from "../components/Content";
// Images
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import new1 from "../assets/new1.jpg";
import new2 from "../assets/new2.jpg";
import new3 from "../assets/new3.jpg";
import md1 from "../assets/md1.jpg";
import md2 from "../assets/md2.jpg";
import md3 from "../assets/md3.jpg";

const bannerList = ["banner1.png", "banner2.png", "banner3.png", "banner4.png"];

const HomeScreen = () => {
  return (
    <Container>
      <BannerGroup bannerList={bannerList} />
      {/* NEW ITEMS */}
      <Title>NEW ITEMS WE LOVE &#128150;</Title>
      <ProductWrapper>
        <MainPageProduct
          src={home1}
          title="BDG Stella Shirt Jacket"
          price={109000}
        />
        <MainPageProduct
          src={home2}
          title="Creedence Clearwater Revival Psychedelic Tee"
          price={48000}
        />
        <MainPageProduct
          src={home3}
          title="Modelo Can Mosaic Hoodie Sweatshirt"
          price={85000}
        />
      </ProductWrapper>
      {/* BEST SELLERS */}
      <Title>CUSTOMER FAVORITES &#128293;</Title>
      <ProductWrapper>
        <MainPageProduct
          src={new1}
          title="Out From Under Lori Terry Racerback Jumpsuit"
          price={79000}
        />
        <MainPageProduct
          src={new2}
          title="Urban Renewal Remnants Upcycled Quilt Applique Linen Chore Coat"
          price={183000}
        />
        <MainPageProduct
          src={new3}
          title="Dr. Martens Jadon Platform 8-Eye Boot"
          price={221000}
        />
      </ProductWrapper>
      {/* MD'S PICK */}
      <Title>PICKED OUT FOR YOU &#10024;</Title>
      <ProductWrapper>
        <MainPageProduct
          src={md1}
          title="Out From Under Lori Terry Racerback Jumpsuit"
          price={79000}
        />
        <MainPageProduct
          src={md2}
          title="Urban Renewal Remnants Upcycled Quilt Applique Linen Chore Coat"
          price={183000}
        />
        <MainPageProduct
          src={md3}
          title="Dr. Martens Jadon Platform 8-Eye Boot"
          price={221000}
        />
      </ProductWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 0;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  letter-spacing: 0.2rem;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 3rem;
`;

export default HomeScreen;
