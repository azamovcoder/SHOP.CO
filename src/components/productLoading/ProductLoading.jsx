import "./ProductLoading.scss";

import React, { Fragment } from "react";

const ProductLoading = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="arrivals__loading">
          <div className="arrivals__loader">
            <div className="arrivals__loader-img"></div>
            <div className="arrivals__loader-content">
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
          <div className="arrivals__loader">
            <div className="arrivals__loader-img"></div>
            <div className="arrivals__loader-content">
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
          <div className="arrivals__loader">
            <div className="arrivals__loader-img"></div>
            <div className="arrivals__loader-content">
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
          <div className="arrivals__loader">
            <div className="arrivals__loader-img"></div>
            <div className="arrivals__loader-content">
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductLoading;
