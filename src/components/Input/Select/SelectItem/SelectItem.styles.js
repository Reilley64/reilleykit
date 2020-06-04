import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  item: {
    display: 'block',
    padding: '6px 12px',
    width: '100%',
    userSelect: 'none',
    '&:hover': {
      backgroundColor: 'rgb(235, 236, 240)',
    },
  },
});

export default useStyles;
