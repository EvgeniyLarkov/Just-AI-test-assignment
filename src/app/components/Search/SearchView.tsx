import React from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

export interface SearchViewProps {
  value: string;
  setValue: (ev: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchView: React.FC<SearchViewProps> = ({
  value,
  setValue,
}: SearchViewProps) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <SearchIcon />
      <InputBase
        placeholder="Поиск"
        value={value}
        onChange={setValue}
        className={styles.input}
      />
    </div>
  );
};

export default SearchView;
