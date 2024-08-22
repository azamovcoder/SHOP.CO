import "./NotFound.scss";

import React, { Fragment } from "react";

import { NavLink } from "react-router-dom";
import NotFoundImg from "../../assets/notfound.avif";

const NotFound = () => {
  return (
    <Fragment>
      <div className="not__found container">
        <img src={NotFoundImg} alt="notFound.img" />
        <NavLink to={"/"}>Go Home</NavLink>
      </div>
    </Fragment>
  );
};

export default NotFound;
