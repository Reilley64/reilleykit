import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  menuHeader: {
    color: 'rgb(107, 119, 140)',
    textTransform: 'uppercase',
    marginTop: '1.5rem',
    marginBottom: '1rem',
    '&:first-child': {
      marginTop: '0',
    },
  },
});

export default useStyles;
