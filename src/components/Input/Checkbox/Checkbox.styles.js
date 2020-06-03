import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: ({ theme }) => ({
    color: theme.palette.text.base,
    display: 'flex',
    alignItems: 'flex-start',
  }),
  box: ({ value }) => ({
    display: 'flex',
    flexShrink: '0',
    position: 'relative',
    '& > input': {
      left: '50%',
      margin: '0px',
      opacity: '0',
      padding: '0',
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      top: '50%',
      pointerEvents: 'none',
    },
    '& > span': {
      lineHeight: '0',
      flexShrink: '0',
      color: value ? 'rgb(0, 82, 204)' : 'rgb(250, 251, 252)',
      fill: value ? 'rgb(250, 251, 252)' : 'transparent',
      transition: 'all .2s ease-in-out 0s',
      '& > span': {
        display: 'flex',
        height: '24px',
        width: '24px',
        '& > svg': {
          height: '24px',
          width: '24px',
          maxHeight: '100%',
          maxWidth: '100%',
          pointerEvents: 'none',
        },
      },
    },
  }),
  label: {
    padding: '2px 4px',
  },
});

export default useStyles;
