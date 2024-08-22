import "./ManageProduct.scss";

import React, { Fragment } from "react";

import { useGetProductsQuery } from "../../../context/api/productApi";

const ManageProduct = () => {
  const { data } = useGetProductsQuery();
  const products = data?.payload;
  console.log(products);
  return (
    <Fragment>
      <div className="manage__products">
        {products?.map((el) => (
          <div className="manage__products__product">
            <div className="manage__products__product__img">
              <img src={el?.urls[0]} alt="" />
            </div>
            <div className="manage__products__product__info">
              <h3>{el?.title}</h3>
              <div className="manage__products__product__info__prices">
                <p>${el?.price}</p>
                <p>${el?.oldPrice}</p>
              </div>
              <div className="manage__products__product__info__buttons">
                <button>edit</button>
                <button>delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ManageProduct;
