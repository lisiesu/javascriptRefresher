import React from "react";

interface SearchFieldProps {
  search: string;
  handleSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchFieldProps> = ({ search, handleSearch }) => {
  return (
    <>
      <h3>Search</h3>
      <input
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        autoFocus
      />
    </>
  );
};

export default SearchBar;
