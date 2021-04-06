import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: '2px 20px',
    alignItems: 'center',
    boxShadow: theme.shadows[3],
  },
  input: {
    fontSize: '1.25rem',
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

export default useStyles;
