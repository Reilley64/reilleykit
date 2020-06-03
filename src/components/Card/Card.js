import clsx from 'clsx';
import React from 'react';

import useStyles from './Card.styles';

import useTheme from '../../hooks/useTheme';

const Card = ({ children, classname }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={clsx(classes.card, classname)}>
      {children}
    </div>
  );
};

export default Card;
