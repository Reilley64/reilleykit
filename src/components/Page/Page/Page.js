import clsx from 'clsx';
import React from 'react';

import useStyles from './Page.styles';

import useTheme from '../../../hooks/useTheme';

const Page = ({ children, className, ...props }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={clsx(classes.page, className)} {...props}>
      {children}
    </div>
  );
};

export default Page;
