import "./Hero.scss";

import React, { Fragment } from "react";

import HeroImg from "../../assets/home/hero.jpg";

const Hero = () => {
  return (
    <Fragment>
      <div className="hero ">
        <div className=" hero__container container">
          <div className="hero__left">
            <h1 className="hero__title">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="hero__desc">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="hero__button">Shop Now</button>
            <div className="hero__info">
              <div className="hero__info__item">
                <h3>200+</h3>
                <p>International Brands</p>
              </div>
              <div className="hero__info__item hero__info__item__middle">
                <h3>2,000+</h3>
                <p>High-Quality Products</p>
              </div>
              <div className="hero__info__item">
                <h3>30,000+</h3>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="hero__right">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
