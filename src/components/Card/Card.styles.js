import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    borderRadius: '3px',
    boxShadow: 'rgba(9, 30, 66, .25) 0 1px 1px, rgba(9, 30, 66, .31) 0 0 1px 0',
  },
});

export default useStyles;
