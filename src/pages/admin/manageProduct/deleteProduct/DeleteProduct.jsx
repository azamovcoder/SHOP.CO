import "../../manageCategory/ManageCategory.scss";

import React, { useEffect } from "react";

import { message } from "antd";
import { useDeleteProductMutation } from "../../../../context/api/productApi";

const DeleteProduct = ({ deleteProduct, setDeleteProduct }) => {
  const [deleteProductById, { isLoading, isSuccess }] =
    useDeleteProductMutation();

  const handleDeleteProduct = () => {
    deleteProductById(deleteProduct._id);
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("Product deleted successfully !");
      setDeleteProduct(null);
    }
  }, [isSuccess]);

  return (
    <section className="delete__category">
      <h4>
        Delete: <span>{deleteProduct.title} ? </span>
      </h4>
      <div className="delete__category__buttons">
        <button
          className="delete__category__close"
          onClick={() => setDeleteProduct(null)}
        >
          Close
        </button>
        <button
          className="delete__category__delete"
          onClick={handleDeleteProduct}
        >
          {isLoading ? "Loading..." : "Delete"}
        </button>
      </div>
    </section>
  );
};

export default DeleteProduct;
