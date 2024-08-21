import "./Home.scss";

import React, { Fragment } from "react";

import Brands from "../../components/brends/Brands";
import Browse from "../../components/browse/Browse";
import Comments from "../../components/comments/Comments";
import Hero from "../../components/hero/Hero";
import NewArrivals from "../../components/newArrivals/NewArrivals";
import TopSelling from "../../components/topSelling/TopSelling";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <Browse />
      <Comments />
    </Fragment>
  );
};

export default Home;
