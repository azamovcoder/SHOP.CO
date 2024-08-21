import "./NewArrivals.scss";

import React, { Fragment, memo } from "react";

import { NavLink } from "react-router-dom";
import Products from "../products/Products";

const NewArrivals = () => {
  return (
    <Fragment>
      <div className="newArrivals">
        <div className=" container">
          <h2 className="newArrivals__title">NEW ARRIVALS</h2>
          <Products limit={4} />
        </div>
        <button className="newArrivals__button">
          <NavLink to={"/shop"}>View All</NavLink>
        </button>
      </div>
    </Fragment>
  );
};

export default memo(NewArrivals);
