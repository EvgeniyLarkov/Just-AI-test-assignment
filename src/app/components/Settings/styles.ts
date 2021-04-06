import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
    backgroundColor: '#fff',
    borderRadius: '60px',
    zIndex: 150,
  },
}));

export default useStyles;
