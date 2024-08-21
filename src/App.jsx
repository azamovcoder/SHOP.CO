import React, { Fragment, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import BrandPage from "./pages/brends/Brends";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/home/Home";
import Layout from "./layout/Layout";
import Shop from "./pages/Shop/Shop";
import SinglePage from "./pages/SinglePage/SinglePage";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="singlePage/:Id" element={<SinglePage />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="cart" element={<Cart />} />
          <Route path="shop" element={<Shop />} />
          <Route path="brands" element={<BrandPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Fragment>
  );
};

export default App;
