import { useState } from "react";

const SearchableList = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="searchable-list">
      <label htmlFor="search">Search</label>
      <input
        type="search"
        onChange={handleChange}
        placeholder="Search"
        name="search"
        id="search"
      />
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>{item.toString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
