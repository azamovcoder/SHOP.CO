import "./SearchProductTop.scss";

import React, { Fragment } from "react";

import { NavLink } from "react-router-dom";
import { useGetProductsBySearchQuery } from "../../context/api/productApi";

const SearchProductTop = ({ search }) => {
  const { data, isError, isLoading } = useGetProductsBySearchQuery({
    value: search,
  });
  console.log(data);
  return (
    <Fragment>
      <div className="header__search__top__input__values">
        {isLoading ? (
          <p>Loading ...</p>
        ) : isError ? (
          <p className="header__search__top__input__values__frame">Not Found</p>
        ) : (
          data?.payload?.map((el) => (
            <NavLink to={`/singlePage/${el?.id}`}>
              <div
                className="header__search__top__input__values__frame"
                key={el?._id}
              >
                <div className="header__search__top__input__values__frame__img">
                  <img src={el?.urls[0]} alt="" />
                </div>
                <p>{el?.title}</p>
              </div>
            </NavLink>
          ))
        )}
      </div>
    </Fragment>
  );
};

export default SearchProductTop;
