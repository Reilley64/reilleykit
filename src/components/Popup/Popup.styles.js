import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    position: 'relative',
  },
  popup: {
    boxShadow: '0 0 0 .0625rem hsla(0, 0%, 0%, .1), 0 .25rem .6875rem hsla(0, 0%, 0%, .1)',
    margin: '.5rem 0',
    position: 'absolute',
    top: '100%',
    zIndex: '1',
  },
});

export default useStyles;
