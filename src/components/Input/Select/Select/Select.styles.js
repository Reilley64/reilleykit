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
    padding: '.5rem .375rem',
    width: '100%',
    '&:disabled::placeholder': {
      color: 'rgb(165, 173, 186)',
      opacity: '1',
    },
  },
  endAdornment: ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    paddingRight: '.75rem',
    '& svg': {
      color: theme.palette.text.muted,
      fontSize: '.5625rem',
    },
  }),
  wrapper: ({ disabled, theme }) => ({
    alignItems: 'center',
    backgroundColor: theme.palette.card.main,
    border: `.125rem solid ${theme.palette.border.main}`,
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
      backgroundColor: disabled ? 'rgb(250, 251, 252)' : theme.palette.interact.main,
    },
    '&:focus-within': {
      backgroundColor: theme.palette.card.main,
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
