import "./Favorites.scss";

import React, { Fragment } from "react";

import EmptyImg from "../../assets/singlePage/emptywish.svg";
import { NavLink } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import { useSelector } from "react-redux";

const Favorites = () => {
  let wishlistData = useSelector((state) => state.wishlist.value);
  //   const cartData = useSelector((state) => state.cart.value);
  return (
    <Fragment>
      {wishlistData.length ? (
        <div className="container">
          <div className="products__cards">
            {wishlistData?.map((el) => (
              <ProductCard key={el?._id} product={el} />
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="empty container">
            <img src={EmptyImg} alt="empty.svg" />

            <h2>Your Favorites empty yet.</h2>
            <NavLink to={"/"}>Go Home</NavLink>
          </div>
        </>
      )}
    </Fragment>
  );
};

export default Favorites;
