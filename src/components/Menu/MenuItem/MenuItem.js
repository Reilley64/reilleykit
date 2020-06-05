import clsx from 'clsx';
import React from 'react';

import useStyles from './MenuItem.styles';

import useTheme from '../../../hooks/useTheme';

const MenuItem = ({
  children, className, ...props
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={clsx(classes.menuItem, className)} {...props}>
      <span>{children}</span>
    </div>
  );
};

export default MenuItem;
