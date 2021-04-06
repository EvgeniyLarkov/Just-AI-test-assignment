import { makeStyles } from '@material-ui/core/styles';

const svg = "data:image/svg+xml,%3Csvg width='400' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Layer_1'%3E%3Ctitle%3ELayer 1%3C/title%3E%3Ctext opacity='0.3' style='cursor: move;' font-style='normal' font-weight='bold' xml:space='preserve' text-anchor='start' font-family='sans-serif' font-size='36' id='svg_2' y='100' x='142.70833' stroke-width='0' stroke='%23000' fill='%23000000'%3EDROP%3C/text%3E%3Ctext style='cursor: move;' font-weight='bold' xml:space='preserve' text-anchor='start' font-family='sans-serif' font-size='36' id='svg_3' y='150' x='144.28333' opacity='0.3' fill-opacity='null' stroke-opacity='null' stroke-dasharray='null' stroke-width='0' stroke='%23000' fill='%23000000'%3EZONE%3C/text%3E%3C/g%3E%3C/svg%3E";

const useStyles = makeStyles((theme) => ({
  root: (props: { isDragging: boolean }) => ({
    width: '100%',
    minHeight: '80vh',
    backgroundImage: `url("${svg}")`,
    backgroundRepeat: 'no-repeat',
    paddingBottom: '200px',
    backgroundSize: '100%',
    borderRadius: '8px',
    backgroundColor: props.isDragging ? 'orange' : 'inherit',
    boxShadow: props.isDragging ? theme.shadows[3] : 'inherit',
    transition: `all 0.3s ${theme.transitions.easing.easeIn}`,
    zIndex: 0,
  }),
  inner: {
    padding: '8px',
  },
  enter: {
    maxHeight: 0,
    opacity: 0,
    transform: 'translateY(-100px)',
  },
  enterActive: {
    opacity: 1,
    maxHeight: '120px',
    transform: 'translateY(0)',
    transition: `all 300ms ${theme.transitions.easing.easeInOut}`,
  },
  exit: {
    opacity: 1,
    height: 0,
    transform: 'translateY(0)',
    transition: `all 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  exitActive: {
    opacity: 0,
    transform: 'translateY(-100px)',
  },
}));

export default useStyles;
