import "./Shop.scss";

import React, { Fragment, useEffect, useState } from "react";

import ProductCard from "../../components/productCard/ProductCard";
import ProductLoading from "../../components/productLoading/ProductLoading";
import { useGetCategoryQuery } from "../../context/api/categoryApi";
import { useGetProductsByCategoryQuery } from "../../context/api/productApi";

const Shop = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { data: categories } = useGetCategoryQuery();
  const [category, setCategory] = useState("all"); // Default all category
  const { data, isLoading } = useGetProductsByCategoryQuery({
    category: category,
  });

  return (
    <Fragment>
      {isLoading ? (
        <ProductLoading />
      ) : (
        <div className="container">
          <select
            className="filter-select"
            onChange={(e) => setCategory(e.target.value || "all")}
            name="category"
          >
            <option value="all">All</option> {/* Setting default as "all" */}
            {categories?.payload?.map((el) => (
              <option key={el._id} value={el._id}>
                {el.title}
              </option>
            ))}
          </select>
          <div className="products__cards">
            {data?.payload?.map((el) => (
              <ProductCard key={el?._id} product={el} />
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Shop;
