import "../products/Products.scss";

import React, { Fragment, memo } from "react";

import ProductCard from "../productCard/ProductCard";
import ProductLoading from "../productLoading/ProductLoading";
import { useGetProductsQuery } from "../../context/api/productApi";

const Products = ({ limit, skip }) => {
  const { data, isLoading } = useGetProductsQuery({ limit, skip });
  const products = data?.payload;
  return (
    <Fragment>
      {isLoading ? <ProductLoading /> : <></>}
      <div className="container">
        <div className="products__cards">
          {products?.map((el) => (
            <ProductCard key={el?._id} product={el} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default memo(Products);
