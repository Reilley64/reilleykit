import React from 'react';

import MenuItem from '../../../Menu/MenuItem/MenuItem';

const SelectItem = ({
  children, field, form, getLabel, setOpen, setValue, value,
}) => (
  <MenuItem
    onClick={() => {
      setValue(getLabel());
      setOpen(false);
      form.setFieldValue(field.name, value);
    }}
  >
    {children}
  </MenuItem>
);

export default SelectItem;
