import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/redux/ducks';
import SearchView from './SearchView';
import useSearch from './useSearch';
import useDebounce from '../../utils/hooks/useDebounce';

const Search: React.FC = () => {
  const { numberOfUsers } = useSelector(({ settings }: RootState) => settings);
  const [input, setInput] = useState('');
  const [,setValue] = useSearch();

  const delayedSetValue = useDebounce(setValue, 300, true);

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInput(ev.target.value);
    delayedSetValue(ev.target.value);
  };

  return (
    <SearchView
      value={input}
      numberOfUsers={numberOfUsers}
      setValue={handleInputChange}
    />
  );
};

export default Search;
