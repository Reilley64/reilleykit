import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  col: ({ size }) => ({
    alignSelf: 'stretch',
    flex: `1 0 calc(100% / 12 * ${size} - 1rem)`,
    margin: '1rem .5rem 0 .5rem',
    maxWidth: `calc(100% / 12 * ${size} - 1rem)`,
    minWidth: 'calc(100% / 12 - 1rem)',
    overflowWrap: 'break-word',
    transition: 'max-width 300ms cubic-bezier(.4, 0, .2, 1)',
  }),
});

export default useStyles;
