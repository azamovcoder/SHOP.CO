import "./ManageProduct.scss";

import React, { Fragment, useState } from "react";

import DeleteProduct from "./deleteProduct/DeleteProduct";
import EditProduct from "./editProduct/EditProduct";
import Module from "../../../components/Module/Module";
import { useGetProductsQuery } from "../../../context/api/productApi";

const ManageProduct = () => {
  const { data } = useGetProductsQuery({ limit: 10 });
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const products = data?.payload;
  console.log(products);
  return (
    <Fragment>
      <div className="manage__products">
        {products?.map((el) => (
          <div key={el?._id} className="manage__products__product">
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
                <button onClick={() => setEditProduct(el)}>edit</button>
                <button onClick={() => setDeleteProduct(el)}>delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {deleteProduct ? (
        <Module close={() => setDeleteProduct(null)}>
          <DeleteProduct
            deleteProduct={deleteProduct}
            setDeleteProduct={setDeleteProduct}
          />
        </Module>
      ) : (
        <></>
      )}
      {editProduct ? (
        <Module width={600} close={setEditProduct}>
          <EditProduct
            editProduct={editProduct}
            setEditProduct={setEditProduct}
          />
        </Module>
      ) : (
        <></>
      )}
    </Fragment>
  );
};

export default ManageProduct;
