import { makeStyles } from '@material-ui/core';

interface UseStylesProps {
  isOver?: boolean,
  isDragging?: boolean
}

const useStyles = makeStyles((theme) => ({
  root: (props: UseStylesProps) => ({
    position: 'relative',
    transition: `all 0.1s ${theme.transitions.easing.easeIn}`,
    paddingTop: (props.isOver && props.isDragging) ? '20px' : '0',
  }),
  continer: (props: UseStylesProps) => ({
    position: 'absolute',
    top: '-30px',
    height: 'calc(100% + 12px)',
    width: '100%',
    paddingTop: (props.isOver && props.isDragging) ? '20px' : '0',
    zIndex: props.isDragging ? 1000 : 1,
  }),
}));

export default useStyles;
