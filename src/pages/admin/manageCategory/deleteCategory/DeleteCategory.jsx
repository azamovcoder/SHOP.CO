import "./DeleteCategory.scss";

import React, { useEffect } from "react";

import { message } from "antd";
import { useDeleteCategoryMutation } from "../../../../context/api/categoryApi";

const DeleteCategory = ({ deleteCategoryById, setDeleteCategoryById }) => {
  const [deleteCategory, { isLoading, isSuccess }] =
    useDeleteCategoryMutation();

  const handleDeleteCategoryById = () => {
    deleteCategory(deleteCategoryById._id);
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("Category deleted successfully!");
      setDeleteCategoryById(null);
    }
  }, [isSuccess, setDeleteCategoryById]);

  return (
    <section className="delete__category">
      <h4>
        <span>Delete: {deleteCategoryById.title} ?</span>
      </h4>
      <div className="delete__category__buttons">
        <button
          className="delete__category__close"
          onClick={() => setDeleteCategoryById(null)}
          type="button"
        >
          Close
        </button>
        <button
          className="delete__category__delete"
          disabled={isLoading}
          onClick={handleDeleteCategoryById}
        >
          {isLoading ? "Loading..." : "Delete"}
        </button>
      </div>
    </section>
  );
};

export default DeleteCategory;
