import { NavLink, Navigate } from "react-router-dom";
import React, { Fragment, memo } from "react";

import Products from "../products/Products";

const TopSelling = () => {
  return (
    <Fragment>
      <div className="newArrivals top__sell">
        <div className=" container">
          <h2 className="newArrivals__title">TOP SELLING</h2>
          <Products limit={4} skip={2} />
        </div>
        <button className="newArrivals__button">
          <NavLink to={"/shop"}>View All</NavLink>
        </button>
      </div>
    </Fragment>
  );
};

export default memo(TopSelling);
