import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    position: 'relative',
  },
  input: {
    backgroundColor: 'transparent',
    border: '0 none',
    boxSizing: 'border-box',
    color: 'inherit',
    cursor: 'inherit',
    fontFamily: 'inherit',
    height: '2.6em',
    minWidth: '0',
    outline: 'currentcolor none medium',
    padding: '8px 6px',
    width: '100%',
    '&:disabled::placeholder': {
      color: 'rgb(165, 173, 186)',
      opacity: '1',
    },
  },
  endAdornment: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: '12px',
    '& svg': {
      color: 'rgb(66, 82, 110)',
      fontSize: '9px',
    },
  },
  wrapper: ({ disabled, theme }) => ({
    alignItems: 'center',
    backgroundColor: 'rgb(250, 251, 252)',
    border: '2px solid rgb(233, 225, 230)',
    borderRadius: '3px',
    boxSizing: 'border-box',
    cursor: 'text',
    display: 'flex',
    flex: '1 1 100%',
    justifyContent: 'space-between',
    maxWidth: '100%',
    overflow: 'hidden',
    overflowWrap: 'break-word',
    pointerEvents: 'auto',
    transition: 'background-color .2s ease-in-out 0s, border-color .2s ease-in-out 0s',
    verticalAlign: 'top',
    '&:hover': {
      backgroundColor: disabled ? 'rgb(250, 251, 252)' : 'rgb(235, 236, 240)',
    },
    '&:focus-within': {
      backgroundColor: 'rgb(255, 255, 255)',
      borderColor: theme.palette.primary.main,
    },
  }),
  label: ({ theme }) => ({
    color: theme.palette.text.muted,
    fontSize: '.85rem',
  }),
  requiredSpan: ({ theme }) => ({
    color: theme.palette.danger.main,
  }),
  menu: {
    top: '100%',
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: '4px',
    boxShadow: '0 0 0 1px hsla(0, 0%, 0%, .1),0 4px 11px hsla(0, 0%, 0%, .1)',
    margin: '8px 0',
    position: 'absolute',
    width: '100%',
    zIndex: '1',
    maxHeight: '300px',
    overflowY: 'auto',
    padding: '8px 0',
  },
});

export default useStyles;
