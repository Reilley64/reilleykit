import clsx from 'clsx';
import React from 'react';

import useStyles from './Button.styles';

import useTheme from '../../hooks/useTheme';
import Spinner from '../Spinner/Spinner';

const Button = ({
  className, children, color, disabled, loading, required, type, ...props
}) => {
  const theme = useTheme();
  const classes = useStyles({ color, disabled, theme });

  return (
    <button
      className={clsx(classes.button, className)}
      disabled={loading || disabled}
      type={type || 'button'}
      {...props}
    >
      <span className={classes.buttonSpan}>
        {loading
          ? <Spinner size={0.5}/>
          : children
        }
      </span>
    </button>
  );
};

export default Button;
