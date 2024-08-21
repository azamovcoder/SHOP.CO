import "./Brends.scss";

import { Brands } from "../../static";
import { NavLink } from "react-router-dom";
import React from "react";

const BrandPage = () => {
  return (
    <div className="container">
      <div className="brands">
        {Brands?.map((el) => (
          <div className="brands__frame">
            <NavLink to={el?.url}>
              <img src={el?.img} alt="brand.img" />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
