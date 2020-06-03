import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: ({ disabled, theme }) => ({
    color: disabled ? 'rgb(151, 160, 175)' : theme.palette.text.base,
    display: 'flex',
    alignItems: 'flex-start',
  }),
  box: {
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
  },
  boxSpan: ({ disabled, value }) => ({
    lineHeight: '0',
    flexShrink: '0',
    color: disabled ? 'rgb(244, 245, 247)' : value ? 'rgb(0, 82, 204)' : 'rgb(250, 251, 252)',
    fill: disabled ? 'transparent' : value ? 'rgb(250, 251, 252)' : 'transparent',
    transition: 'all .2s ease-in-out 0s',
    '&:hover': {
      color: disabled ? 'rgb(244, 245, 247)' : 'rgb(235, 236, 240)',
    },
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
        fill: 'inherit',
        '& > g': {
          '& > rect': {
            transition: 'stroke .2s ease-in-out 0s',
            stroke: disabled ? 'default' : value ? 'currentcolor' : 'rgb(233, 225, 230)',
            stokeWidth: '2px',
          },
        },
      },
    },
  }),
  label: {
    padding: '2px 4px',
  },
});

export default useStyles;
