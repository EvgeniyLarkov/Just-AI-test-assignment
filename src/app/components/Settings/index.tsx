import React, { useState } from 'react';
import { IconButton, Slider, Typography } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import Popper from '@material-ui/core/Popper';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/redux/ducks';
import { AppDispatch } from 'app/redux/store';
import { set } from 'app/redux/ducks/settings';
import useDebounce from 'app/utils/hooks/useDebounce';
import useStyles from './styles';

const Settings: React.FC = () => {
  const { numberOfUsers } = useSelector(({ settings }: RootState) => settings);
  const [input, setInput] = useState(numberOfUsers);
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const dispatch: AppDispatch = useDispatch();

  const styles = useStyles();

  const handleClick = (ev: React.MouseEvent) => {
    setAnchorEl(anchorEl ? null : ev.currentTarget);
  };

  const handleDispatch = (value: number) => {
    dispatch(set({ numberOfUsers: value }));
  };

  const delayedDispatch = useDebounce(handleDispatch, 300, true);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = (ev: React.ChangeEvent<{}>, value: number | number[]) => {
    setInput(value as number);
    delayedDispatch(value as number);
  };

  const toggle = Boolean(anchorEl);

  return (
    <>
      <IconButton onClick={handleClick}>
        <SettingsIcon fontSize="large" />
      </IconButton>
      <Popper open={toggle} anchorEl={anchorEl}>
        <div className={styles.wrapper}>
          <Typography>
            Количество пользователей:
            {' '}
            {input}
          </Typography>
          <Slider
            defaultValue={input}
            value={input}
            onChange={handleChange}
            step={200}
            min={1000}
            max={5000}
            valueLabelDisplay="auto"
            marks
          />
        </div>
      </Popper>
    </>
  );
};

export default Settings;
