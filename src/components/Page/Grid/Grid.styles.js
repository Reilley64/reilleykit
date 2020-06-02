import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  grid: ({ nested }) => ({
    position: 'relative',

    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    margin: nested ? '-16px -16px 0 -16px' : '-16px 0 0 0',
    padding: '0 8px',
  }),
});

export default useStyles;
