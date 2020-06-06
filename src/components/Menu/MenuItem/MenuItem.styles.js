import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  menuItem: ({ onClick, to }) => ({
    color: 'rgb(0, 0, 0)',
    display: 'flex',
    padding: '.5rem 1.25rem',
    userSelect: onClick || to ? 'none' : 'default',
    width: '100%',
    '&:hover': {
      backgroundColor: onClick || to ? 'rgb(235, 236, 240)' : 'transparent',
    },
    '&a:hover': {
      backgroundColor: 'rgb(235, 236, 240)',
    },
    '& span': {
      alignItems: 'center',
      display: 'flex',
      minHeight: '1.5rem',
      width: '100%',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  }),
});

export default useStyles;
