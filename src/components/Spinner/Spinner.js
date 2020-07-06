import React from 'react';
import { useTheme } from 'reilleykit';

import useStyles from './Spinner.styles';

const Spinner = ({ size }) => {
  const theme = useTheme();

  const classes = useStyles({ size, theme });

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
