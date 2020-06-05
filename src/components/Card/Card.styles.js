import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    borderRadius: '.1875rem',
    boxShadow: 'rgba(9, 30, 66, .25) 0 .0625rem .0625rem, rgba(9, 30, 66, .31) 0 0 .0625rem 0',
  },
});

export default useStyles;
