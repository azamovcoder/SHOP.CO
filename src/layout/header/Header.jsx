import "./Header.scss";

import { FaBars, FaRegHeart } from "react-icons/fa6";
import React, { Fragment, memo, useState } from "react";

import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineX } from "react-icons/hi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import ProductSearch from "../../components/productsearch/ProductSearch";
import SearchProductTop from "../../components/searchProductTop/SearchProductTop";
import { useSelector } from "react-redux";

const Header = () => {
  const [remove, setRemove] = useState(true);
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");
  return (
    <Fragment>
      {remove ? (
        <div className="header__adc ">
          <div className="container">
            <p>
              Sign up and get 20% off to your first order.{" "}
              <span>Sign Up Now</span>
            </p>
            <button onClick={() => setRemove(false)}>
              <HiOutlineX color="#fff" />
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div
        onClick={() => setShow((p) => !p)}
        className={`overlay ${show ? "overlay-show" : ""} `}
      ></div>
      <header>
        <div className="header container">
          <div
            className={`header__search__top ${
              showSearch ? "show__search" : ""
            }`}
          >
            <div className="header__search__top__input">
              <span>
                <IoSearchOutline />
              </span>
              <input
                placeholder="Search for products..."
                onChange={(e) => setSearch2(e.target.value)}
                value={search2}
                type="text"
              />
              {search2 ? <SearchProductTop search={search2} /> : <></>}
            </div>
            <button
              onClick={() => {
                setShowSearch((p) => !p);
                setSearch2("");
              }}
            >
              <HiOutlineX />
            </button>
          </div>
          <div className="header__logo">
            <button onClick={() => setShow((p) => !p)}>
              <FaBars />
            </button>
            <NavLink to={"/"}>
              <h2>SHOP.CO</h2>
            </NavLink>
          </div>
          <ul className={`header__list  ${show ? "show" : ""} `}>
            <button onClick={() => setShow((p) => !p)}>
              <HiOutlineX />
            </button>
            <li className="header__list__item">
              <NavLink to={"shop"}>Shop </NavLink>
            </li>

            <li className="header__list__item">
              <NavLink to={"brands"}>Brands</NavLink>
            </li>
          </ul>
          <div className="header__search">
            <span>
              <IoSearchOutline />
            </span>
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              placeholder="Search for products..."
            />
            {search ? (
              <div className="">
                <ProductSearch search={search} />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="header__right__links">
            <button onClick={() => setShowSearch((p) => !p)}>
              <IoSearchOutline />
            </button>
            <div className="header__right__links__link">
              <span>{wishlistData.length ? wishlistData.length : 0}</span>

              <NavLink to={"favorites"}>
                <FaRegHeart />
              </NavLink>
            </div>
            <div className="header__right__links__link">
              <span>{cartData.length ? cartData.length : 0}</span>

              <NavLink to={"cart"}>
                <FiShoppingCart />
              </NavLink>
            </div>
            <NavLink to={"/admin/create-product"}>
              <IoPersonCircleOutline />
            </NavLink>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default memo(Header);
