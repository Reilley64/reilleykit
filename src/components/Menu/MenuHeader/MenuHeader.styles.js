import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  menuHeader: {
    color: 'rgb(107, 119, 140)',
    textTransform: 'uppercase',
    marginTop: '1.5rem !important',
    marginBottom: '1rem !important',
    padding: '0.5rem 1.25rem',
    '&:first-child': {
      marginTop: '0 !important',
    },
  },
});

export default useStyles;
