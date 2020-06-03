import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px',
    borderRadius: '3px',
    boxShadow: 'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
  },
});

export default useStyles;
