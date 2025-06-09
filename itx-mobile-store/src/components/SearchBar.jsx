import React from 'react';

function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Buscar por marca o modelo"
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
  );
}

export default SearchBar;