import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
// components
import AddItemButtons from "../components/Content/AddItemButtons";
import LikeButton from "../components/Content/LikeButton";
import LoadingSpinner from "../components/Content/LoadingSpinner";
import EmptyMessage from "../components/Content/EmptyMessage";
// util
import { SERVER_URL } from "../util/config";

const ProductDetailScreen = () => {
  // PARAMS
  const { prodTypeName, prodId } = useParams();
  // STATES
  const [prodDetails, setProdDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [itemCount, setItemCount] = useState(1);

  let url = SERVER_URL;
  if (prodTypeName === "new") {
    url += "new-list.json";
  } else if (prodTypeName === "best") {
    url += "best-list.json";
  } else {
    url += "md-list.json";
  }

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await axios.get(url);
      const product = response.data.find((item) => item.prodId === prodId);
      setProdDetails(product);
      setIsLoading(false);
    };

    getData();
  }, [url, prodId]);

  // HANDLERS
  const minusClickHandler = () => {
    if (itemCount === 1) {
      return;
    }
    setItemCount(itemCount - 1);
  };

  const plusClickHandler = () => {
    setItemCount(itemCount + 1);
  };

  return (
    <Container>
      {!prodDetails && !isLoading && <EmptyMessage />}
      {isLoading && <LoadingSpinner />}
      {prodDetails && !isLoading && (
        <>
          <ImageWrapper>
            <img src={prodDetails.prodImgUrl} alt="" />
            <LikeButton />
          </ImageWrapper>
          <ContentWrapper>
            <h1>{prodDetails.prodName}</h1>
            <Price>₩ {(+prodDetails.prodPrice).toLocaleString()}</Price>
            <p>{prodDetails.prodDescription}</p>
            <CareList>
              {prodDetails.prodContentCare.map((item) => (
                <li>- {item}</li>
              ))}
            </CareList>
            <ButtonsContainer>
              <Button onClick={minusClickHandler}>-</Button>
              <span>{itemCount}</span>
              <Button onClick={plusClickHandler}>+</Button>
            </ButtonsContainer>
            <AddItemButtons />
          </ContentWrapper>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-around;
`;

const ImageWrapper = styled.div`
  width: 45%;
  height: 80vh;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentWrapper = styled.div`
  width: 45%;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.7rem;
  }
`;

const CareList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 4rem;
`;

const Price = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const ButtonsContainer = styled.div`
  margin-bottom: 2rem;
  span {
    display: inline-block;
    width: 3rem;
    text-align: center;
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  background: none;
  border: 2px solid #333;
  border-radius: 10px;
  width: 3rem;
  height: 2.5rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default ProductDetailScreen;
