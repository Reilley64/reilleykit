import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@keyframes spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
  loader: ({ size, theme }) => ({
    border: `${4 * size}px solid ${theme.palette.border.main}`,
    borderRadius: '50%',
    borderTop: `${4 * size}px solid ${theme.palette.primary.main}`,
    width: `${32 * size}px`,
    height: `${32 * size}px`,
    animation: 'spin 1s ease-in-out infinite',
    animationName: '$spin',
  }),
});

export default useStyles;
