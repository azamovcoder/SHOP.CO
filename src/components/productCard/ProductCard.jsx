import "../products/Products.scss";

import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { LiaStarHalf, LiaStarSolid } from "react-icons/lia";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { RiShoppingCart2Line } from "react-icons/ri";
import { addToCart } from "../../context/slices/cartSlices";
import { toggleHeart } from "../../context/slices/wishlistSlices";

const ProductCard = ({ product }) => {
  const getRating = () => {
    let res = [];
    for (let i = 0; i < Math.trunc(product?.Rating); i++) {
      res.push(
        <LiaStarSolid
          color="gold"
          key={`full-${i}`}
          className="cart__item__rating__star"
        />
      );
    }
    if (product?.Rating % 1 > 0.4) {
      res.push(
        <LiaStarHalf
          color="gold"
          key="half"
          className="cart__item__rating__star"
        />
      );
    }
    // for (let i = Math.round(product?.Rating); i < 6; i++) {
    //   res.push(
    //     <FaRegStar key={`empty-${i}`} className="cart__item__rating__star" />
    //   );
    // }

    return res;
  };
  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div key={product?.id} className="products__cards__card">
        <div className="products__cards__card__img">
          <img src={product?.urls[0]} alt="product.img" />
          <button
            onClick={() => dispatch(toggleHeart(product))}
            className="products__cards__card__img__btn"
          >
            {wishlistData.some((element) => element._id === product?._id) ? (
              <FaHeart />
            ) : (
              <FaRegHeart />
            )}
          </button>
        </div>
        <div className="products__cards__card__info">
          <button
            onClick={() => {
              dispatch(addToCart(product));
            }}
            className="products__cards__card__info__card-btn"
          >
            {cartData?.some((element) => element._id === product._id) ? (
              <RiShoppingCart2Fill />
            ) : (
              <RiShoppingCart2Line />
            )}
          </button>
          <NavLink to={`/singlePage/${product?._id}`}>
            <h3 className="products__cards__card__info__title">
              {product?.title}
            </h3>
          </NavLink>

          <div className="products__cards__card__info__rating">
            <div className="products__cards__card__info__rating__rate">
              {getRating()}
            </div>
            {product?.Rating} <span>/ 5</span>
          </div>
          {product?.price < product?.oldPrice ? (
            <div className="products__cards__card__info__prices">
              <p className="products__cards__card__info__prices__price">
                ${product?.price}
              </p>
              <p className="products__cards__card__info__prices__old__price">
                ${product?.oldPrice}
              </p>
              <span className="products__cards__card__info__prices__sale">
                -20%
              </span>
            </div>
          ) : (
            <p>${product?.price}</p>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
