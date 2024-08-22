import "./Brends.scss";

import { Brands } from "../../static";
import { NavLink } from "react-router-dom";
import React from "react";

const BrandPage = () => {
  return (
    <div className="container">
      <div className="brands">
        {Brands?.map((el) => (
          <NavLink to={el?.url}>
            <div className="brands__frame">
              <img src={el?.img} alt="brand.img" />
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
