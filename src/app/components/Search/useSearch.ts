import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearSearch, setSearch } from 'app/redux/ducks/search';
import { AppDispatch } from 'app/redux/store';

export type UseSearchInterface = [string, React.Dispatch<React.SetStateAction<string>>];

function useSearch(initValue = ''): UseSearchInterface {
  const [value, setValue] = useState(initValue);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (!value) {
      dispatch(clearSearch());
    } else {
      dispatch(setSearch({ match: value }));
    }
  }, [value, dispatch]);

  return [value, setValue];
}

export default useSearch;
