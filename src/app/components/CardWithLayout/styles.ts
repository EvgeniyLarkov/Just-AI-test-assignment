import { makeStyles } from '@material-ui/core';

export interface ProfileCardStylesProps {
  src: string,
}

const useStyles = makeStyles({
  root: ({
    position: 'relative',
  }),
  continer: ({
    position: 'absolute',
    top: '-63px',
    height: '124px',
    width: '100%',
  }),
});

export default useStyles;
