import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './Grid.styles';

import useTheme from '../../../hooks/useTheme';

const Grid = ({
  children, className, nested, ...props
}) => {
  const theme = useTheme();
  const classes = useStyles({ nested, theme });

  return (
    <div className={clsx(classes.grid, className)} {...props}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  nested: PropTypes.bool,
};

Grid.defaultProps = {
  nested: false,
};

export default Grid;
