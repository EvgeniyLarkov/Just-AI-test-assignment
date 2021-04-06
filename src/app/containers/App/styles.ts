import { makeStyles } from '@material-ui/core';

// eslint-disable-next-line import/prefer-default-export
export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(6),
    backgroundColor: '#e2e1e0',
  },

  wrapper: {
    display: 'flex',
    width: '1440px',
    backgroundColor: 'inherit',
  },

  contentRelative: {
    width: '50%',
    padding: `0 ${theme.spacing(1)}px`,
    backgroundColor: 'inherit',
  },

  contentFixed: {
    width: '50vw',
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 'calc(0px - 100vw + 100%)',
    padding: `0 ${theme.spacing(1)}px`,
    borderLeft: `1px solid ${theme.palette.divider}`,

    overflow: 'auto',
    '-ms-overflow-style': 'none',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },

  inner: {
    position: 'relative',
    maxWidth: '720px',
    left: 0,
    paddingTop: theme.spacing(6),
  },

  label: {
    display: 'flex',
    backgroundColor: 'inherit',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 80,
  },

  progress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 400,
  },

  sticky: {
    position: 'sticky',
    top: 0,
  },

  settings: {
    position: 'absolute',
    right: 0,
  },
}));
