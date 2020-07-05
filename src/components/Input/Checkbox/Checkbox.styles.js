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
      margin: '0',
      opacity: '0',
      padding: '0',
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      top: '50%',
      pointerEvents: 'none',
    },
  },
  boxSpan: ({ disabled, theme, value }) => ({
    lineHeight: '0',
    flexShrink: '0',
    color: disabled ? 'rgb(244, 245, 247)' : value ? theme.palette.primary.main : theme.palette.card.main,
    fill: disabled ? 'transparent' : value ? 'rgb(255, 255, 255)' : 'transparent',
    transition: 'all .2s ease-in-out 0s',
    '&:hover': {
      color: disabled ? 'rgb(244, 245, 247)' : value ? theme.palette.primary.light : theme.palette.interact.main,
    },
    '& > span': {
      display: 'flex',
      height: '1.5rem',
      width: '1.5rem',
      '& > svg': {
        height: '1.5rem',
        width: '1.5rem',
        maxHeight: '100%',
        maxWidth: '100%',
        pointerEvents: 'none',
        fill: 'inherit',
        '& > g': {
          '& > rect': {
            transition: 'stroke .2s ease-in-out 0s',
            stroke: disabled ? 'default' : value ? 'currentcolor' : theme.palette.border.main,
            stokeWidth: '.125rem',
          },
        },
      },
    },
  }),
  label: {
    padding: '.125rem .25rem',
  },
});

export default useStyles;
