import clsx from 'clsx';
import React from 'react';

import useStyles from './Menu.styles';

import useTheme from '../../../hooks/useTheme';

const Menu = ({
  children, className, ...props
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={clsx(classes.menu, className)} {...props}>
      {children}
    </div>
  );
};

export default Menu;
