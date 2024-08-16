import "./Hero.scss";

import React, { Fragment } from "react";

import Brend1 from "../../assets/home/b1.svg";
import Brend2 from "../../assets/home/b2.svg";
import Brend3 from "../../assets/home/b3.svg";
import Brend4 from "../../assets/home/b4.svg";
import Brend5 from "../../assets/home/b5.svg";
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
      <div className="hero__bottom ">
        <div className="container">
          <div className="hero__bottom__item">
            <img src={Brend1} alt="brend.svg" />
          </div>
          <div className="hero__bottom__item">
            <img src={Brend2} alt="brend.svg" />
          </div>
          <div className="hero__bottom__item">
            <img src={Brend3} alt="brend.svg" />
          </div>
          <div className="hero__bottom__item">
            <img src={Brend4} alt="brend.svg" />
          </div>
          <div className="hero__bottom__item">
            <img src={Brend5} alt="brend.svg" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
