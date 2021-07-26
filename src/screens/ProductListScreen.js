import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import styled from "styled-components";
// components
import MainTitle from "../components/Content/MainTitle";
import InnerPageProduct from "../components/Content/InnerPageProduct";
import EmptyMessage from "../components/Content/EmptyMessage";
import LoadingSpinner from "../components/Content/LoadingSpinner";
// util
import { SERVER_URL } from "../util/config";

const ProductListScreen = () => {
  const params = useParams();
  const menuTitle = params.menuTitle;

  const [itemsList, setItemsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let url = SERVER_URL;
  if (menuTitle === "new") {
    url += "new-list.json";
  } else if (menuTitle === "best") {
    url += "best-list.json";
  } else {
    url += "md-list.json";
  }

  useEffect(() => {
    // API 호출
    const getData = async () => {
      setIsLoading(true);
      const response = await axios.get(url);

      if (response) {
        setItemsList(response.data);
        setIsLoading(false);
      }
    };

    getData();
  }, [url]);

  return (
    <>
      <MainTitle menuTitle={menuTitle} />
      <TaxStatement>* All prices are tax and duty included</TaxStatement>
      <ProductWrapper>
        {itemsList.length === 0 && !isLoading && <EmptyMessage />}
        {itemsList.length === 0 && isLoading && <LoadingSpinner />}
        {itemsList.length > 0 &&
          itemsList.map((item) => (
            <InnerPageProduct
              key={item.prodId}
              prodId={item.prodId}
              prodTypeName={item.prodTypeName}
              src={item.prodImgUrl}
              title={item.prodName}
              price={item.prodPrice}
            />
          ))}
      </ProductWrapper>
    </>
  );
};

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const TaxStatement = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
  color: #252525;
  margin-bottom: 0.5rem;
`;

export default ProductListScreen;
