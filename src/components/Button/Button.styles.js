import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: ({ color, theme }) => ({
    alignItems: 'baseline',
    borderWidth: '0',
    display: 'inline-flex',
    fontWeight: '500',
    maxWidth: '100%',
    outline: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    background: color ? theme.palette[color].main : 'rgba(9, 30, 66, .04)',
    borderRadius: '3px',
    color: color ? 'rgb(255, 255, 255)' : 'rgb(66, 82, 110)',
    height: '2.29rem',
    padding: '0 8px',
    transition: 'background 0.1s ease-out',
    verticalAlign: 'middle',
    width: 'auto',
    '&:hover': {
      background: color ? theme.palette[color].light : 'rgba(9, 30, 66, .08)',
    },
    '&:focus': {
      background: color ? theme.palette[color].dark : 'rgba(179, 212, 255, .8)',
      color: color ? 'rgb(255, 255, 255)' : theme.palette.primary.main,
    },
    '& span': {
      alignSelf: 'center',
      flex: '1 1 auto',
      margin: '0 4px',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      transition: 'opacity 0.3s ease 0s',
      opacity: '1',
    },
  }),
});

export default useStyles;
