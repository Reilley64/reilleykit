import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: ({ color, theme }) => ({
    alignItems: 'baseline',
    borderWidth: '0',
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: '500',
    maxWidth: '100%',
    outline: 'none',
    textAlign: 'center',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    backgroundColor: color ? theme.palette[color].main : 'rgba(9, 30, 66, .04)',
    borderRadius: '.1875rem',
    color: color ? 'rgb(255, 255, 255)' : 'rgb(66, 82, 110)',
    height: '2.29rem',
    padding: '0 .5rem',
    transition: 'background 0.1s ease-out',
    verticalAlign: 'middle',
    width: 'auto',
    '&:hover': {
      backgroundColor: color ? theme.palette[color].light : 'rgba(9, 30, 66, .08)',
    },
    '&:active': {
      backgroundColor: color ? theme.palette[color].dark : 'rgba(179, 212, 255, .8)',
      color: color ? 'rgb(255, 255, 255)' : theme.palette.primary.main,
    },
    '&:disabled': {
      backgroundColor: theme.mode === 'dark' ? 'rgba(255, 255, 255, .12)' : 'rgba(0, 0, 0, .12)',
      color: theme.mode === 'dark' ? 'rgba(255, 255, 255, .3)' : 'rgba(0, 0, 0, .26)',
    },
  }),
  buttonSpan: {
    alignSelf: 'center',
    flex: '1 1 auto',
    margin: '0 .25rem',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    transition: 'opacity 0.3s ease 0s',
    opacity: '1',
  },
});

export default useStyles;
