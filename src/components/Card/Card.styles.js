import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  card: ({ theme }) => ({
    backgroundClip: 'border-box',
    backgroundColor: theme.palette.card.main,
    borderRadius: '.25rem',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    wordWrap: 'break-word',
  }),
});

export default useStyles;
