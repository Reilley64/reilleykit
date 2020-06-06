import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  menuItem: ({ link, onClick }) => ({
    color: 'rgb(0, 0, 0)',
    display: 'flex',
    padding: '.5rem 1.25rem',
    userSelect: link || onClick ? 'none' : 'default',
    width: '100%',
    '&:hover': {
      backgroundColor: link || onClick ? 'rgb(235, 236, 240)' : 'transparent',
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
