import clsx from 'clsx';
import React from 'react';

import useStyles from './Textfield.styles';

import useTheme from '../../../hooks/useTheme';

const Textfield = ({
  className, disabled, field, label, required, type, ...props
}) => {
  const theme = useTheme();
  const classes = useStyles({ disabled, theme });

  return (
    <div>
      {label
      && <label className={classes.label}>
        {label}{required && <span className={classes.requiredSpan}> *</span>}
      </label>
      }
      <div className={classes.wrapper}>
        <input
          className={clsx(classes.input, className)}
          {...field}
          {...props}
          disabled={disabled}
          type={type || 'text'}
          required={false}
        />
      </div>
    </div>
  );
};

export default Textfield;
