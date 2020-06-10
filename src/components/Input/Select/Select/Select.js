import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';

import useStyles from './Select.styles';

import useTheme from '../../../../hooks/useTheme';
import Popup from '../../../Popup/Popup';

const Select = ({
  className, children, disabled, field, form, label, required, ...props
}) => {
  const theme = useTheme();
  const classes = useStyles({ disabled, theme });

  const ref = useRef();
  const inputRef = useRef();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const getLabel = () => {
    for (const option of (Array.isArray(children) ? children : [children])) {
      if (option.props.value === field.value) return option.props.children;
    }
    return '';
  };

  useOnclickOutside(ref, () => {
    setOpen(false);
    setValue(getLabel());
    field.onBlur(field.name);
  });

  useEffect(() => {
    setValue(getLabel());
    field.onBlur(field.name);
  }, [field.value]);

  return (
    <div className={classes.container} ref={ref}>
      {label
      && <label className={classes.label}>
        {label}{required && <span className={classes.requiredSpan}> *</span>}
      </label>
      }
      <div className={classes.wrapper}>
        <input
          className={clsx(classes.input, className)}
          {...props}
          disabled={disabled}
          name={field.name}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => {
            setValue('');
            setOpen(true);
          }}
          ref={inputRef}
          required={false}
          type={'text'}
          value={value}
        />
        <div className={classes.endAdornment} onClick={() => inputRef.current.focus()}>
          <FontAwesomeIcon icon={faChevronDown}/>
        </div>
      </div>
      {open
      && <Popup style={{ maxHeight: '18.75rem' }}>
        {(Array.isArray(children) ? children : [children])
          .filter((child) => child.props.children.startsWith(value))
          .map((child) => React.cloneElement(child, {
            field, form, getLabel, setOpen, setValue,
          }))
        }
      </Popup>
      }
    </div>
  );
};

export default Select;
