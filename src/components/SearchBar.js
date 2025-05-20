import React, { useState, useEffect } from 'react';
import debounce from '../utils/debounce';

function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const debounced = debounce(onSearch, 300);
    debounced(value);
    return () => debounced.cancel && debounced.cancel();
  }, [value, onSearch]);

  return (
    <input
      className="search-bar"
      type="search"
      placeholder="Search tasks..."
      value={value}
      onChange={e => setValue(e.target.value)}
      aria-label="Search tasks"
    />
  );
}

export default SearchBar; 