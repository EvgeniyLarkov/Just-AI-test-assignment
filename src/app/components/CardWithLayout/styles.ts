import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: ({
    position: 'relative',
  }),
  continer: (props: { isDragging?: boolean }) => ({
    position: 'absolute',
    top: '-63px',
    height: '124px',
    width: '100%',
    zIndex: props.isDragging ? 1000 : 1,
  }),
});

export default useStyles;
