import { makeStyles } from '@material-ui/core';

// eslint-disable-next-line import/prefer-default-export
export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingTop: theme.spacing(6),
  },

  wrapper: {
    display: 'flex',
    width: 1440,
    backgroundColor: theme.palette.background.paper,
  },

  content: {
    width: '50%',
    padding: `0 ${theme.spacing(1)}px`,
    '&:last-child': {
      borderLeft: `1px solid ${theme.palette.divider}`,
    },
  },

  label: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 80,
  },
}));
