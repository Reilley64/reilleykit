import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  grid: ({ nested }) => ({
    position: 'relative',

    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    margin: nested ? '-1rem -1rem 0 -1rem' : '-1rem 0 0 0',
    padding: '0 .5rem',
  }),
});

export default useStyles;
