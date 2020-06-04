import React from 'react';

import useStyles from './SelectItem.styles';

import useTheme from '../../../../hooks/useTheme';

const SelectItem = ({
  children, field, form, getLabel, setOpen, setValue, value,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div
      className={classes.item}
      onClick={() => {
        setValue(getLabel());
        setOpen(false);
        form.setFieldValue(field.name, value);
      }}
    >
      {children}
    </div>
  );
};

export default SelectItem;
