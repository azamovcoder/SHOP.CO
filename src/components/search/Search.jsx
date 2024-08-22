import React from "react";
import { useLazyGetProductsBySearchQuery } from "../../context/api/productApi";

const Search = ({ search }) => {
  let { data, isError } = useLazyGetProductsBySearchQuery({ value: search });
  return <div>Search</div>;
};

export default Search;
