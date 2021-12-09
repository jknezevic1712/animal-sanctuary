import React from "react";
import "./search-bar.styles.scss";

const SearchBar = ({ searchChange }) => {
  return (
    <div className="search-bar-container">
      <input className="" type="search" onChange={searchChange} />
    </div>
  );
};

export default SearchBar;
