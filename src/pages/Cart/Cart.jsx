import "./Cart.scss";

import { NavLink, useNavigate } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import {
  addToCart,
  decrementCart,
  deleteAllCart,
  remove,
} from "../../context/slices/cartSlices";
import { useDispatch, useSelector } from "react-redux";

import CartImg from "../../assets/singlePage/emptycart.png";
import { FaRegTrashAlt } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import Module from "../../components/Module/Module";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const navigate = useNavigate();
  const BOT__TOKEN = "7468900185:AAH4z9uHj3Y9MTsaz2KcYlGW19zpWZK0llo";
  const CHAT__ID = "6366315724";
  const [module, setModule] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [value, setValue] = useState("");
  const [coupon, setCoupon] = useState(0);
  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  useEffect(() => {
    let total = cartData?.reduce((a, b) => a + b.quantity * b.price, 0);

    setTotalPrice(total);
  }, [cartData]);
  const subtotal = totalPrice;

  const total = subtotal;
  const handleAmount = (e) => {
    e.preventDefault();
    if (value === "Laylo") {
      setCoupon(+total * 0.2);
    } else {
      alert("Promocode error");
    }
    setValue("");
  };
  const handleSendMessage = (e) => {
    e.preventDefault();
    let text = "User:  %0A%0A";
    text += `FullName: ${fullName} %0A`;
    text += `Number: ${number} %0A`;
    text += `Address: ${address} %0A`;
    text += `Products : ${cartData?.map((el) => el.title)} %0A`;
    text += `Total : ${totalPrice} %0A`;
    let url = `https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${CHAT__ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setFullName("");
    setNumber("");
    setAddress("");
    dispatch(deleteAllCart());
  };

  return (
    <Fragment>
      {cartData.length ? (
        <>
          <div className="container">
            <h2>Your cart</h2>
            <div className="cart">
              <div className="cart__frames">
                {cartData?.map((el) => (
                  <div className="cart__frames__frame">
                    <div className="cart__frames__frame__left">
                      <div className="cart__frames__frame__left__img">
                        <NavLink to={`/singlePage/${el?._id}`}>
                          <img src={el?.urls[0]} alt="product.png" />
                        </NavLink>
                      </div>
                      <div className="cart__frames__frame__left__info">
                        <h4>{el?.title}</h4>
                        <p>{el?.info[0]}</p>
                        <p>{el?.info[1]}</p>
                        <span>${el?.price}</span>
                      </div>
                    </div>
                    <div className="cart__frames__frame__right">
                      <button
                        className="cart__frames__frame__right__delete-btn"
                        onClick={() => dispatch(remove(el))}
                      >
                        <FaRegTrashAlt />
                      </button>
                      <div className="cart__frames__frame__right__buttons">
                        <button
                          disabled={el.quantity <= 1}
                          onClick={() => dispatch(decrementCart(el))}
                        >
                          -
                        </button>
                        <span>{el?.quantity}</span>
                        <button
                          disabled={el?.quantity === el?.stock}
                          onClick={() => dispatch(addToCart(el))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart__order">
                <h3>Order Summary</h3>
                <div className="cart__order__item">
                  <h3>Subtotal</h3>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="cart__order__item">
                  <h3>Discount (-20%)</h3>
                  <span>20% </span>
                </div>
                <div className="cart__order__item">
                  <h3>Delivery Fee</h3>
                  <p>-$25.00</p>
                </div>
                <hr />
                <div className="cart__order__item">
                  <h3>Total</h3>
                  <p>${total.toFixed(2) - coupon}</p>
                </div>
                <form onSubmit={handleAmount} className="cart__order__sale">
                  <div className="cart__order__sale__input">
                    <GoTag className="cart__order__sale__input__tag" />
                    <input
                      required
                      type="text"
                      placeholder="Laylo"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </div>
                  <button className="cart__order__sale__btn">Apply</button>
                </form>
                <button
                  onClick={() => setModule(true)}
                  className="cart__order__button"
                >
                  Go to Checkout{" "}
                </button>
              </div>
            </div>
          </div>
          {module ? (
            <Module close={setModule}>
              <form onSubmit={handleSendMessage} className="cart__modal">
                <h3>Enter your Information</h3>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  type="text"
                  placeholder="Enter your Full-Name"
                />
                <input
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                  type="number"
                  placeholder="Enter your Phone Number: +998"
                />
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  type="text"
                  placeholder="Enter your Address"
                />
                <div className="cart__order__item">
                  <h3>Total</h3>
                  <p>${total.toFixed(2) - coupon}</p>
                </div>
                <button>Order</button>
              </form>
            </Module>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <div className="empty__cart container">
            <img src={CartImg} alt="empty.png" />
            <NavLink to="/">Go Home</NavLink>
          </div>
        </>
      )}
    </Fragment>
  );
};

export default Cart;
