import "./Footer.scss";

import React, { Fragment } from "react";

import FooterImg1 from "../../assets/home/f1.svg";
import FooterImg2 from "../../assets/home/f2.svg";
import FooterImg3 from "../../assets/home/f3.svg";
import FooterImg4 from "../../assets/home/f4.svg";
import FooterImg5 from "../../assets/home/fb1.svg";
import FooterImg6 from "../../assets/home/fb2.svg";
import FooterImg7 from "../../assets/home/fb3.svg";
import FooterImg8 from "../../assets/home/fb4.svg";
import FooterImg9 from "../../assets/home/fb5.svg";
import { NavLink } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className="container">
          <div className="footer__register">
            <h2 className="footer__register__title">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
            <form className="footer__register__input">
              <div className="footer__register__input__email">
                <TfiEmail
                  className="footer__register__input__email__logo"
                  color="#00000066"
                />
                <input type="email" placeholder="Enter your email address" />
              </div>
              <button>Subscribe to Newsletter</button>
            </form>
          </div>
        </div>
        <div className="container">
          <div className="footer">
            <div className="footer__main">
              <h2>SHOP.CO</h2>
              <p>
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="footer__main__items">
                <NavLink>
                  <img src={FooterImg1} alt="footer.svg" />
                </NavLink>
                <NavLink>
                  <img src={FooterImg2} alt="footer.svg" />
                </NavLink>
                <NavLink>
                  <img src={FooterImg3} alt="footer.svg" />
                </NavLink>
                <NavLink>
                  <img src={FooterImg4} alt="footer.svg" />
                </NavLink>
              </div>
            </div>
            <div className="footer__lists">
              <ul className="footer__list">
                <li>
                  <h3>Company</h3>
                </li>
                <li>
                  <p>About</p>
                </li>
                <li>
                  <p>Features</p>
                </li>
                <li>
                  <p>Works</p>
                </li>
                <li>
                  <p>Career</p>
                </li>
              </ul>
              <ul className="footer__list">
                <li>
                  <h3>HELP</h3>
                </li>
                <li>
                  <p>Customer Support</p>
                </li>
                <li>
                  <p>Delivery Details</p>
                </li>
                <li>
                  <p>Terms & Conditions</p>
                </li>
                <li>
                  <p>Privacy Policy</p>
                </li>
              </ul>
              <ul className="footer__list">
                <li>
                  <h3>FAQ</h3>
                </li>
                <li>
                  <p>Account</p>
                </li>
                <li>
                  <p>Manage Deliveries</p>
                </li>
                <li>
                  <p>Orders</p>
                </li>
                <li>
                  <p>Payments</p>
                </li>
              </ul>
              <ul className="footer__list">
                <li>
                  <h3>Resources</h3>
                </li>
                <li>
                  <p>Free eBooks</p>
                </li>
                <li>
                  <p>Development Tutorial</p>
                </li>
                <li>
                  <p>How to - Blog</p>
                </li>
                <li>
                  <p>Youtube Playlist</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <p>Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="footer__bottom__right">
              <img src={FooterImg5} alt="footer.svg" />
              <img src={FooterImg6} alt="footer.svg" />
              <img src={FooterImg7} alt="footer.svg" />
              <img src={FooterImg8} alt="footer.svg" />
              <img src={FooterImg9} alt="footer.svg" />
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
