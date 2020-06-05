import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';

import useStyles from './Popup.styles';

import useTheme from '../../hooks/useTheme';
import { Menu } from '../Menu';

const Popup = ({
  button, children, className, style, ...props
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const ref = useRef();
  const [open, setOpen] = useState(false);

  useOnclickOutside(ref, () => {
    setOpen(false);
  });

  if (button) {
    return (
      <div className={clsx(classes.container, className)} ref={ref}>
        {React.cloneElement(button, {
          onClick: () => {
            if (button.props.onClick) button.props.onClick();
            setOpen(true);
          },
        })}
        {open
        && <Menu
          className={classes.popup}
          {...props}
        >
          {React.cloneElement(children, {
            onClick: () => {
              if (children.props.onClick) children.props.onClick();
              setOpen(false);
            },
          })}
        </Menu>
        }
      </div>
    );
  }
  return (
    <Menu
      className={clsx(classes.popup, className)}
      {...props}
    >
      {children}
    </Menu>
  );
};

Popup.defaultProps = {
  style: {},
};

export default Popup;
