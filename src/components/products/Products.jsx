import React, { Fragment, memo } from "react";

import ProductCard from "../productCard/ProductCard";
import { useGetProductsQuery } from "../../context/api/productApi";

const Products = ({ limit }) => {
  const { data } = useGetProductsQuery({ limit });
  const products = data?.payload;
  return (
    <Fragment>
      <div className="products__cards">
        {products?.map((el) => (
          <ProductCard key={el?._id} product={el} />
        ))}
      </div>
    </Fragment>
  );
};

export default memo(Products);
