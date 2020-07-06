import React from 'react';

import useStyles from './Spinner.styles';

import useTheme from '../../hooks/useTheme';

const Spinner = ({ color, size }) => {
  const theme = useTheme();

  const classes = useStyles({ color, size, theme });

  return (
    <div style={{
      margin: '1.25rem 0', display: 'flex', justifyContent: 'center', width: '100%',
    }}>
      <div className={classes.loader}/>
    </div>
  );
};

Spinner.defaultProps = {
  size: 1,
};

export default Spinner;
