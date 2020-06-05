import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  page: ({ compact }) => ({
    padding: compact ? '1rem 14.25rem' : '1rem 28.5rem',
  }),
});

export default useStyles;
