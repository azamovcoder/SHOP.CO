import "./SingleLoading.scss";

import React from "react";

const SingleLoading = () => {
  return (
    <div className=" single__loading container">
      <div className="single__loading__img"></div>
      <div className="single__loading__info">
        <div className="single__loading__info__item"></div>
        <div className="single__loading__info__item"></div>
        <div className="single__loading__info__item"></div>
        <div className="single__loading__info__item"></div>
      </div>
    </div>
  );
};

export default SingleLoading;
