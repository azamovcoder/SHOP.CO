import "./Home.scss";

import React, { Fragment } from "react";

import Browse from "../../components/browse/Browse";
import Hero from "../../components/hero/Hero";
import NewArrivals from "../../components/newArrivals/NewArrivals";
import TopSelling from "../../components/topSelling/TopSelling";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <NewArrivals />
      <TopSelling />
      <Browse />
    </Fragment>
  );
};

export default Home;
