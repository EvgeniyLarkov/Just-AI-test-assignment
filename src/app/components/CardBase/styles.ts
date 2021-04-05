import { makeStyles } from '@material-ui/core';

export interface ProfileCardStylesProps {
  src: string,
}

const useStyles = makeStyles((theme) => ({
  root: ({
    display: 'flex',
    alignContent: 'baseline',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: 60,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
    boxShadow: theme.shadows[5],
  }),
  avatar: (props: ProfileCardStylesProps) => ({
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundImage: `url(${props.src})`,
    backgroundSize: 'contain',
    boxShadow: theme.shadows[1],
  }),
  profileInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: theme.spacing(3),
  },
  textBase: {
    fontSize: '1rem',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.00938em',
  },
  removeButton: {
    marginLeft: 'auto',
  },
}));

export default useStyles;
