import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setSearchTerm }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <input
      type="text"
      value={searchInput}
      onChange={handleSearchChange}
      placeholder="Search recipes..."
      className="search-bar"
    />
  );
};

export default SearchBar;
