import { useState } from "react";

const SearchableList = ({ items, children }) => {
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
          <li key={index}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
