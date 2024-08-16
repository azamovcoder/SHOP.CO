import React, { Fragment, memo } from "react";

import Products from "../products/Products";

const TopSelling = () => {
  return (
    <Fragment>
      <div className="newArrivals top__sell">
        <div className=" container">
          <h2 className="newArrivals__title">TOP SELLING</h2>
          <Products limit={4} />
        </div>
        <button className="newArrivals__button">View All</button>
      </div>
    </Fragment>
  );
};

export default memo(TopSelling);
