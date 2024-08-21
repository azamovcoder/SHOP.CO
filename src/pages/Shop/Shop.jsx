import "./Shop.scss";

import React, { Fragment, useEffect } from "react";

import Products from "../../components/products/Products";

const Shop = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Fragment>
      <div className="shop">
        <Products />
      </div>
    </Fragment>
  );
};

export default Shop;
