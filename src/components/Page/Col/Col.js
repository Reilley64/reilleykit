import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './Col.styles';

import useTheme from '../../../hooks/useTheme';

const Col = ({
  children,
  className,
  size,
  ...props
}) => {
  const theme = useTheme();
  const classes = useStyles({ size, theme });

  return (
    <div className={clsx(classes.col, className)} {...props}>
      {children}
    </div>
  );
};

Col.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
};

export default Col;
