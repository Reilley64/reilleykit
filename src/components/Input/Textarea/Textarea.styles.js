import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
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
    padding: '.5rem .375rem',
    width: '100%',
    '&:disabled::placeholder': {
      color: 'rgb(165, 173, 186)',
      opacity: '1',
    },
  },
  wrapper: ({ disabled, theme }) => ({
    alignItems: 'center',
    backgroundColor: 'rgb(250, 251, 252)',
    border: '.125rem solid rgb(233, 225, 230)',
    borderRadius: '.1875rem',
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
});

export default useStyles;
