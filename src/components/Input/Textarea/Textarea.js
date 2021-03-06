import clsx from 'clsx';
import React from 'react';

import useStyles from './Textarea.styles';

import useTheme from '../../../hooks/useTheme';

const Textarea = ({
  className, disabled, field, label, required, ...props
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
        <textarea
          className={clsx(classes.input, className)}
          {...field}
          {...props}
          disabled={disabled}
          required={false}
        />
      </div>
    </div>
  );
};

export default Textarea;
