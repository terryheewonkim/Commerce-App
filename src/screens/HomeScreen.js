import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
// Components
import BannerGroup from "../components/Banner/BannerGroup";
import { MainPageProduct } from "../components/Content";
import EmptyMessage from "../components/Content/EmptyMessage";
// util
import { SERVER_URL } from "../util/config";
import LoadingSpinner from "../components/Content/LoadingSpinner";

const bannerList = ["banner1.png", "banner2.png", "banner3.png", "banner4.png"];

const HomeScreen = () => {
  const [newList, setNewList] = useState([]);
  const [bestList, setBestList] = useState([]);
  const [mdList, setMdList] = useState([]);
  const [isNewLoading, setIsNewLoading] = useState(false);
  const [isBestLoading, setIsBestLoading] = useState(false);
  const [isMdLoading, setIsMdLoading] = useState(false);

  useEffect(() => {
    // API 호출
    const getData = async () => {
      setIsNewLoading(true);
      setIsBestLoading(true);
      setIsMdLoading(true);
      const newData = await axios.get(SERVER_URL + "new-list.json");
      const bestData = await axios.get(SERVER_URL + "best-list.json");
      const mdData = await axios.get(SERVER_URL + "md-list.json");

      if (newData && bestData && mdData) {
        setNewList(newData.data);
        setIsNewLoading(false);
        setBestList(bestData.data);
        setIsBestLoading(false);
        setMdList(mdData.data);
        setIsMdLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <Container>
      <BannerGroup bannerList={bannerList} />
      {/* NEW ITEMS */}
      <Title>NEW ITEMS WE LOVE &#128150;</Title>
      <ProductWrapper>
        {newList.length === 0 && !isNewLoading && <EmptyMessage />}
        {isNewLoading && <LoadingSpinner />}
        {newList.length > 0 &&
          !isNewLoading &&
          newList.map((item) => (
            <MainPageProduct
              key={item.prodId}
              prodId={item.prodId}
              prodTypeName={item.prodTypeName}
              src={item.prodImgUrl}
              title={item.prodName}
              prodPrice={item.prodPrice}
            />
          ))}
      </ProductWrapper>
      {/* BEST SELLERS */}
      <Title>CUSTOMER FAVORITES &#128293;</Title>
      <ProductWrapper>
        {bestList.length === 0 && !isBestLoading && <EmptyMessage />}
        {isBestLoading && <LoadingSpinner />}
        {bestList.length > 0 &&
          !isBestLoading &&
          bestList.map((item) => (
            <MainPageProduct
              key={item.prodId}
              prodId={item.prodId}
              prodTypeName={item.prodTypeName}
              src={item.prodImgUrl}
              title={item.prodName}
              prodPrice={item.prodPrice}
            />
          ))}
      </ProductWrapper>
      {/* MD'S PICK */}
      <Title>PICKED OUT FOR YOU &#10024;</Title>
      <ProductWrapper>
        {mdList.length === 0 && !isMdLoading && <EmptyMessage />}
        {isMdLoading && <LoadingSpinner />}
        {mdList.length > 0 &&
          !isMdLoading &&
          mdList.map((item) => (
            <MainPageProduct
              key={item.prodId}
              prodId={item.prodId}
              prodTypeName={item.prodTypeName}
              src={item.prodImgUrl}
              title={item.prodName}
              prodPrice={item.prodPrice}
            />
          ))}
      </ProductWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  letter-spacing: 0.2rem;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default HomeScreen;
