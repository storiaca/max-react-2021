import { useState, useRef } from "react";

const SearchableList = ({ items, itemKeyFn, children }) => {
  const lastChange = useRef();
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchTerm(event.target.value);
    }, 500);
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
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
