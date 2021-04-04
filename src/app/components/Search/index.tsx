import React, { useState } from 'react';
import SearchView from './SearchView';
import useSearch from './useSearch';
import useDebounce from '../../hooks/useDebounce';

const Search: React.FC = () => {
  const [input, setInput] = useState('');
  const [,setValue] = useSearch();

  const delayedSetValue = useDebounce(setValue, 500, true);

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInput(ev.target.value);
    delayedSetValue(ev.target.value);
  };

  return (
    <SearchView
      value={input}
      setValue={handleInputChange}
    />
  );
};

export default Search;
