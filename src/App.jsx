import React, { Fragment, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";
import BrandPage from "./pages/brends/Brends";
import Cart from "./pages/Cart/Cart";
import CreateCategory from "./pages/admin/createCategory/CreateCategory";
import CreateProduct from "./pages/admin/createProduct/CreateProduct";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/home/Home";
import Layout from "./layout/Layout";
import Login from "./pages/login/Login";
import ManageCategory from "./pages/admin/manageCategory/ManageCategory";
import ManageProduct from "./pages/admin/manageProduct/ManageProduct";
import NotFound from "./pages/notFound/NotFound";
import Shop from "./pages/Shop/Shop";
import SinglePage from "./pages/SinglePage/SinglePage";

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
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="manage-product" element={<ManageProduct />} />
            <Route path="create-category" element={<CreateCategory />} />
            <Route path="manage-category" element={<ManageCategory />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
