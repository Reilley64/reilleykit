import clsx from 'clsx';
import React from 'react';

import useStyles from './MenuHeader.styles';

import useTheme from '../../../hooks/useTheme';

const MenuHeader = ({
  children, className, ...props
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <h6 className={clsx(classes.menuHeader, className)} {...props}>
      <span>{children}</span>
    </h6>
  );
};

export default MenuHeader;
