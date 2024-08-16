import "./Browse.scss";

import React, { Fragment } from "react";

import browseImg1 from "../../assets/home/br1.jpg";
import browseImg2 from "../../assets/home/br2.jpg";
import browseImg3 from "../../assets/home/br3.jpg";
import browseImg4 from "../../assets/home/br4.png";

const Browse = () => {
  return (
    <Fragment>
      <div className="browse">
        <div className="container">
          <h2 className="browse__title">BROWSE BY DRESS STYLE</h2>
          <div className="browse__cards">
            <div className="browse__cards__card">
              <img src={browseImg1} alt="b.img" />
            </div>
            <div className="browse__cards__card">
              <img src={browseImg2} alt="b.img" />
            </div>
            <div className="browse__cards__card">
              <img src={browseImg3} alt="b.img" />
            </div>
            <div className="browse__cards__card">
              <img src={browseImg4} alt="b.img" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Browse;
