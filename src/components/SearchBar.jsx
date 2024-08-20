import React from "react";
import './styles/search.scss';
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return <form className="searchForm d-flex">
    <input type="text" name="search" placeholder="What are we Searching for?" id="searchInput"/>
    <select name="filter" id="searchFilter">
        <option value="location">Location</option>
        <option value="name">Name</option>
    </select>
    <button type="submit"><IoSearch />Search</button>
  </form>;
};

export default SearchBar;
