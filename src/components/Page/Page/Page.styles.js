import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  page: ({ compact }) => ({
    padding: compact ? '1rem 28.5rem' : '1rem 14.25rem',
  }),
});

export default useStyles;
