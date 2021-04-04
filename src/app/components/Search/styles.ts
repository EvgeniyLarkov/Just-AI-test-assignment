import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 40,
    borderRadius: 20,
    padding: '2px 20px',
    alignItems: 'center',
    boxShadow: theme.shadows[10],

  },
  input: {
    fontSize: '1.25rem',
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

export default useStyles;
