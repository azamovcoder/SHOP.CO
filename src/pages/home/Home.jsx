import "./Home.scss";

import React, { Fragment } from "react";

import Hero from "../../components/hero/Hero";

//const Home = lazy(() => import("./pages/home/Home"));

const Home = () => {
  return (
    <Fragment>
      <Hero />
    </Fragment>
  );
};

export default Home;
