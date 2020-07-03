import Color from 'color';
import React, { createContext } from 'react';

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children, mode }) => {
  const value = {
    palette: {
      primary: {
        main: 'rgb(103, 183, 220)',
      },
      secondary: {
        main: 'rgb(145, 156, 167)',
      },
      success: {
        main: 'rgb(66, 210, 157)',
      },
      danger: {
        main: 'rgb(250, 103, 103)',
      },
      warning: {
        main: 'rgb(249, 188, 13)',
      },
      info: {
        main: 'rgb(68, 186, 220)',
      },
    },
    ...mode,
  };

  for (const key of Object.keys(value.palette)) {
    if (value.palette[key].main) {
      value.palette[key].light = Color(value.palette[key].main).lighten(0.25).hex();
      value.palette[key].dark = Color(value.palette[key].main).darken(0.25).hex();
    }
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
