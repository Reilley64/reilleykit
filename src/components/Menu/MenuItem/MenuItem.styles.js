import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  menuItem: ({ link, onClick, theme }) => ({
    color: theme.palette.text.base,
    display: 'flex',
    padding: '.5rem 1.25rem',
    userSelect: (link || onClick) ? 'none' : 'default',
    width: '100%',
    '&:hover': {
      backgroundColor: (link || onClick) ? theme.palette.interact.main : 'transparent',
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
