import "./SinglePage.scss";

import { FaCircleCheck, FaHeart, FaRegHeart } from "react-icons/fa6";
import { LiaStarHalf, LiaStarSolid } from "react-icons/lia";
import React, { Fragment, useEffect, useState } from "react";
import { RiShoppingCart2Fill, RiShoppingCart2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import { Comments } from "../../static";
import { IoIosMore } from "react-icons/io";
import NewArrivals from "../../components/newArrivals/NewArrivals";
import SingleLoading from "../../components/singleLoading/SingleLoading";
import { addToCart } from "../../context/slices/cartSlices";
import { toggleHeart } from "../../context/slices/wishlistSlices";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const [indexImage, setIndexImage] = useState(0);
  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);

  const dispatch = useDispatch();
  const { Id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(Id);
  const product = data?.payload;
  useEffect(() => {
    window.scroll(0, 0);
  }, [Id]);

  const getRating = () => {
    let res = [];
    for (let i = 0; i < Math.trunc(product?.rating); i++) {
      res.push(
        <LiaStarSolid
          color="gold"
          key={`full-${i}`}
          className="cart__item__rating__star"
        />
      );
    }
    if (product?.rating % 1 > 0.4) {
      res.push(
        <LiaStarHalf
          color="gold"
          key="half"
          className="cart__item__rating__star"
        />
      );
    }

    return res;
  };

  return (
    <Fragment>
      {isLoading ? (
        <SingleLoading />
      ) : (
        <div className="container">
          <div className="single">
            <div className="single__img">
              <div className="single__img__left__images">
                {product?.urls?.map((url, inx) => (
                  <div className="single__img__left__images__img" key={inx}>
                    <img
                      className={`${inx === indexImage ? "active" : ""} `}
                      onClick={() => setIndexImage(inx)}
                      src={url}
                      alt="product.img"
                    />
                  </div>
                ))}
              </div>
              <div className="single__img__main__img">
                <img src={product?.urls?.[indexImage]} alt="product.img" />
              </div>
            </div>
            <div className="single__info">
              <h2 className="single__info__title">{product?.title}</h2>
              <span className="single__info__rating">
                {getRating()} {product?.rating}/ 5{" "}
              </span>
              <div className="single__info__prices">
                <p className="single__info__prices__price">${product?.price}</p>
                <p className="single__info__prices__old-price">
                  ${product?.oldPrice}
                </p>
                <span className="single__info__prices__sale">-20%</span>
              </div>
              <p className="single__info__desc">{product?.description}</p>
              <div className="single__info__colors">
                <h3>Select Colors</h3>
                <div className="single__info__colors__items">
                  <div
                    className="single__info__colors__item"
                    style={{ backgroundColor: "#4F4631" }}
                  ></div>
                  <div
                    className="single__info__colors__item"
                    style={{ backgroundColor: "#314F4A" }}
                  ></div>
                  <div
                    className="single__info__colors__item"
                    style={{ backgroundColor: "#31344F" }}
                  ></div>
                </div>
              </div>
              <div className="single__info__sizes">
                <p className="single__info__sizes__size">Small</p>
                <p className="single__info__sizes__size">Medium</p>
                <p className="single__info__sizes__size">Large</p>
                <p className="single__info__sizes__size">X-Large</p>
              </div>
              <div className=" single__info__buttons">
                <button
                  className="single__info__buttons__like"
                  onClick={() => dispatch(toggleHeart(product))}
                >
                  {wishlistData.some(
                    (element) => element._id === product?._id
                  ) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
                <button
                  onClick={() => {
                    dispatch(addToCart(product));
                  }}
                  className="single__info__buttons__cart"
                >
                  {cartData?.some((element) => element._id === product._id)
                    ? "Added Cart"
                    : "Add to cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {}
      <div className="container">
        <div className="single__comments">
          {Comments?.map((el) => (
            <div key={el?.id} className="single__comments__comment">
              <div className="single__comments__comment__rating">
                <span>{getRating()}</span>
                <IoIosMore />
              </div>
              <h3>
                {el?.title} <FaCircleCheck color="green" />
              </h3>
              <p>{el?.desc}</p>
              <h4>{el?.posted}</h4>
            </div>
          ))}
        </div>
        <NewArrivals />
      </div>
    </Fragment>
  );
};

export default SinglePage;
