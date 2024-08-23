import "./EditProduct.scss";

import React, { useEffect } from "react";

import { message } from "antd";
import { useGetCategoryQuery } from "../../../../context/api/categoryApi";
import useGetValue from "../../../../hooks/useGetValue";
import { useUpdateProductMutation } from "../../../../context/api/productApi";

const EditProduct = ({ editProduct, setEditProduct }) => {
  const [updateProduct, { isLoading, isSuccess, isError, error }] =
    useUpdateProductMutation();
  const { data } = useGetCategoryQuery();
  const { user, setUser, handleChange } = useGetValue(editProduct);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (editProduct.images && editProduct.images.length > 0) {
      user.images = editProduct.images[0].split("\n");
    } else {
      user.images = []; // Provide a default value or handle as needed
    }

    updateProduct({ body: user, id: user._id });
  };

  useEffect(() => {
    if (isSuccess) {
      message.success("Successfully !");
      setEditProduct(null);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      error;
      setEditProduct(null);
    }
  }, [isError]);
  return (
    <section className="edit__product">
      <form className="edit__product__form" onSubmit={handleUpdate} action="">
        <h3>Update product</h3>
        <div className="edit__product__form__item">
          <input
            required
            value={user.title}
            onChange={handleChange}
            type="text"
            placeholder="Title"
            name="title"
            id="title"
          />
        </div>
        <div className="edit__product__form__item">
          <input
            required
            value={user.price}
            onChange={handleChange}
            type="number"
            placeholder="Price"
            name="price"
            id="price"
          />
        </div>
        {/* <div className="edit__product__form__item">
          <textarea
            value={user.images.("\n")}
            onChange={(e) => setImages(e.target.value)}
            required
            name="images"
            id="image-url"
            placeholder="Image-url"
          ></textarea>
        </div> */}
        <div className="edit__product__form__item">
          <select
            value={user.category} // This should store the category ID instead of the title
            onChange={handleChange}
            name="category"
            id=""
          >
            <option selected disabled value="">
              Choose Category
            </option>
            {data?.payload?.map((item) => (
              <option key={item._id} value={item._id.toString()}>
                {" "}
                {/* Use item.id instead of item.title */}
                {item.title}
              </option>
            ))}
          </select>
        </div>

        <div className="edit__product__form__item">
          <textarea
            value={user.description}
            onChange={handleChange}
            required
            name="desc"
            id="desc"
            placeholder="Desc"
          ></textarea>
        </div>
        <div className="edit__product__form__buttons">
          <button onClick={() => setEditProduct(null)}>cancel</button>
          <button disabled={isLoading}>
            {isLoading ? "loading..." : "edit"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditProduct;
