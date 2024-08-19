import React, { Fragment, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Layout from "./layout/Layout";
import SinglePage from "./pages/SinglePage/SinglePage";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="singlePage/:Id" element={<SinglePage />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
