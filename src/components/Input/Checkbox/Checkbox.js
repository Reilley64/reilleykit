import clsx from 'clsx';
import React from 'react';

import useStyles from './Checkbox.styles';

import useTheme from '../../../hooks/useTheme';

const Checkbox = ({
  className, disabled, field, label, style, ...props
}) => {
  const theme = useTheme();
  const classes = useStyles({ disabled, theme, value: field.value });

  return (
    <label className={clsx(classes.wrapper, className)} style={style}>
      <span className={classes.box}>
        <input {...field} {...props} disabled={disabled} type={'checkbox'}/>
        <span className={classes.boxSpan}>
          <span>
            <svg width={'24'} height={'24'} viewBox={'0 0 24 24'} focusable={'false'} role={'presentation'}>
              <g fillRule={'evenodd'}>
                <rect fill={'currentColor'} x={'6'} y={'6'} width={'12'} height={'12'} rx={'2'}/>
                <path
                  d={'M9.707 11.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L11 12.586l-1.293-1.293z'}
                  fill={'inherit'}
                />
              </g>
            </svg>
          </span>
        </span>
      </span>
      <span className={classes.label}>{label}</span>
    </label>
  );
};

export default Checkbox;
