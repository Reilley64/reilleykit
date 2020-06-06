import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  menu: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: '.1875rem',
    boxShadow: 'rgba(9, 30, 66, .25) 0 .0625rem .0625rem, rgba(9, 30, 66, .31) 0 0 .0625rem 0',
    overflowY: 'auto',
    willChange: 'transform',
    padding: '.375rem 0',
    width: '100%',
  },
});

export default useStyles;
