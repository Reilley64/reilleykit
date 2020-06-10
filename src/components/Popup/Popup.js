import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';

import useStyles from './Popup.styles';

import useTheme from '../../hooks/useTheme';
import { Menu } from '../Menu';

const Popup = ({
  button, children, className, ...props
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
      <div className={classes.container} ref={ref}>
        {React.cloneElement(button, {
          onClick: () => {
            if (button.props.onClick) button.props.onClick();
            setOpen(!open);
          },
        })}
        {open
        && <Menu
          className={clsx(classes.popup, className)}
          {...props}
        >
          {(Array.isArray(children) ? children : [children]).flat().map((child) => (
            React.cloneElement(child, {
              onClick: () => {
                if (child.props.onClick) child.props.onClick();
                setOpen(false);
              },
            })
          ))}
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
      {(Array.isArray(children) ? children : [children]).flat()}
    </Menu>
  );
};

export default Popup;
