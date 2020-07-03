import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  card: ({ theme }) => ({
    backgroundClip: 'border-box',
    backgroundColor: theme.palette.card.main,
    border: '1px solid rgba(245, 246, 250, .85)',
    borderRadius: '.25rem',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    wordWrap: 'break-word',
  }),
});

export default useStyles;
