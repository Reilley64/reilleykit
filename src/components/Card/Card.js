import clsx from 'clsx';
import React from 'react';

import useStyles from './Card.styles';

import useTheme from '../../hooks/useTheme';

const Card = ({ children, className, ...props }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={clsx(classes.card, className)} {...props}>
      {children}
    </div>
  );
};

export default Card;
