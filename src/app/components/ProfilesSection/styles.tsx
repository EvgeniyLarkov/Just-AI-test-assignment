import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';

export const Accordion = withStyles({
  root: {
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

export const AccordionSummary = withStyles({
  root: {
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
  },
  expanded: {},
})(MuiAccordionSummary);

export const useStyles = makeStyles({
  root: {
    backgroundColor: '#e2e1e0',
    '&:first-child': {
      paddingTop: '16px',
    },
    '&:last-child': {
      paddingBottom: '16px',
    },
  },
});
