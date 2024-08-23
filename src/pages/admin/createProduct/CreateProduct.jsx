import "./CreateProduct.scss";

import React, { Fragment, useEffect, useState } from "react";

import { message } from "antd";
import { useCreateProductMutation } from "../../../context/api/productApi";
import { useGetCategoryQuery } from "../../../context/api/categoryApi";
import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
  description: "",
  price: "",
  oldPrice: "",
  categoryId: "",
  rating: "",
  stock: "",
  photos: [],
  units: "",
};

const CreateProduct = () => {
  const { data: categoryData } = useGetCategoryQuery();
  const [createProduct, { isLoading, isSuccess }] = useCreateProductMutation();
  const [productData, setProductData] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFilesChange = (e) => {
    const photos = e.target.files;
    setProductData((prevData) => ({
      ...prevData,
      photos: Array.from(photos),
    }));
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("Product created successfully!");
      navigate("/admin/manage-product");
    }
  }, [isSuccess, setProductData]);

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in productData) {
      if (key === "photos") {
        productData.photos.forEach((file) => {
          formData.append("photos", file);
        });
      } else {
        formData.append(key, productData[key]);
      }
    }

    try {
      await createProduct(formData).unwrap();
      setProductData(initialState);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Fragment>
      <div className="create__product">
        <h2>Create Product</h2>
        <div className="create__product__form">
          <form onSubmit={handleCreateProduct}>
            <div className="create__product__form__item">
              <input
                placeholder="Product title"
                type="text"
                id="title"
                name="title"
                value={productData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="create__product__form__item">
              <textarea
                id="desc"
                name="description"
                value={productData.desc}
                onChange={handleChange}
                placeholder="Desc"
                required
              />
            </div>

            <div className="create__product__form__item">
              <input
                placeholder="Price"
                type="number"
                id="price"
                name="price"
                value={productData.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="create__product__form__item">
              <input
                type="number"
                id="oldPrice"
                placeholder="Old Price"
                name="oldPrice"
                value={productData.oldPrice}
                onChange={handleChange}
                required
              />
            </div>

            <div className="create__product__form__item">
              <select
                id="categoryId"
                name="categoryId"
                value={productData.categoryId}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                {categoryData?.payload?.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="create__product__form__item">
              <select
                id="rating"
                name="rating"
                value={productData.rating}
                onChange={handleChange}
                required
              >
                <option value="">Select Rating</option>
                {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
            </div>

            <div className="create__product__form__item">
              <input
                placeholder="Product quantity"
                type="number"
                id="stock"
                name="stock"
                value={productData.stock}
                onChange={handleChange}
                required
              />
            </div>

            <div className="create__product__form__item">
              <select
                id="units"
                name="units"
                value={productData.units}
                onChange={handleChange}
                required
              >
                <option value="">Select Units</option>
                <option value="Piece">Piece</option>
                <option value=" Pairs">Pairs</option>
                <option value="Quantity">Quantity</option>
              </select>
            </div>

            <div className="create__product__form__item">
              <input
                type="file"
                id="photos"
                name="photos"
                multiple
                onChange={handleFilesChange}
                required
              />
            </div>

            <button disabled={isLoading} type="submit" className="form-button">
              {isLoading ? "Loading ..." : "Create Product"}
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateProduct;
