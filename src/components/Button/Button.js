import clsx from 'clsx';
import React from 'react';

import useStyles from './Button.styles';

import useTheme from '../../hooks/useTheme';

const Button = ({
  className, children, color, disabled, required, type, ...props
}) => {
  const theme = useTheme();
  const classes = useStyles({ color, disabled, theme });

  return (
    <button
      className={clsx(classes.button, className)}
      type={type || 'button'}
      {...props}
    >
      <span className={classes.buttonSpan}>{children}</span>
    </button>
  );
};

export default Button;
