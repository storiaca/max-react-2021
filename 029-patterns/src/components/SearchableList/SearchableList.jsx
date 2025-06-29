import React from "react";

const SearchableList = ({ items }) => {
  return (
    <div className="searchable-list">
      <label htmlFor="search">Search</label>
      <input type="search" placeholder="Search" name="search" id="search" />
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
