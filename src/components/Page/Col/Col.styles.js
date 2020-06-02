import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  col: ({ size }) => ({
    alignSelf: 'stretch',
    flex: `1 0 calc(100% / 12 * ${size} - 16px)`,
    margin: '16px 8px 0 8px',
    maxWidth: `calc(100% / 12 * ${size} - 16px)`,
    minWidth: 'calc(100% / 12 - 16px)',
    overflowWrap: 'break-word',
    transition: 'max-width 300ms cubic-bezier(.4, 0, .2, 1)',
  }),
});

export default useStyles;
