(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('clsx'), require('react'), require('react-jss'), require('color')) :
  typeof define === 'function' && define.amd ? define(['exports', 'clsx', 'react', 'react-jss', 'color'], factory) :
  (global = global || self, factory(global.reilleykit = {}, global.clsx, global.React, global.reactJss, global.Color));
}(this, (function (exports, clsx, React, reactJss, Color) { 'use strict';

  clsx = clsx && Object.prototype.hasOwnProperty.call(clsx, 'default') ? clsx['default'] : clsx;
  var React__default = 'default' in React ? React['default'] : React;
  Color = Color && Object.prototype.hasOwnProperty.call(Color, 'default') ? Color['default'] : Color;

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  var useStyles = reactJss.createUseStyles({
    col: function col(_ref) {
      var size = _ref.size;
      return {
        alignSelf: 'stretch',
        flex: "1 0 calc(100% / 12 * ".concat(size, " - 16px)"),
        margin: '16px 8px 0 8px',
        maxWidth: "calc(100% / 12 * ".concat(size, " - 16px)"),
        minWidth: 'calc(100% / 12 - 16px)',
        overflowWrap: 'break-word',
        transition: 'max-width 300ms cubic-bezier(.4, 0, .2, 1)'
      };
    }
  });

  var ThemeContext = React.createContext(null);

  var ThemeProvider = function ThemeProvider(_ref) {
    var children = _ref.children;
    var value = {
      palette: {
        primary: {
          main: 'rgb(54, 136, 252)'
        },
        secondary: {
          main: 'rgb(145, 156, 167)'
        },
        success: {
          main: 'rgb(66, 210, 157)'
        },
        danger: {
          main: 'rgb(250, 103, 103)'
        },
        warning: {
          main: 'rgb(249, 188, 13)'
        },
        info: {
          main: 'rgb(68, 186, 220)'
        },
        text: {
          base: 'rgb(0, 0, 0)',
          muted: 'rgba(0, 0, 0, .62)'
        }
      }
    };

    for (var _i = 0, _Object$keys = Object.keys(value.palette); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];

      if (value.palette[key].main) {
        value.palette[key].light = Color(value.palette[key].main).lighten(0.25).hex();
        value.palette[key].dark = Color(value.palette[key].main).darken(0.25).hex();
      }
    }

    return /*#__PURE__*/React__default.createElement(ThemeContext.Provider, {
      value: value
    }, children);
  };

  var useTheme = function useTheme() {
    return React.useContext(ThemeContext);
  };

  var Col = function Col(_ref) {
    var children = _ref.children,
        className = _ref.className,
        size = _ref.size,
        props = _objectWithoutProperties(_ref, ["children", "className", "size"]);

    var theme = useTheme();
    var classes = useStyles({
      size: size,
      theme: theme
    });
    return /*#__PURE__*/React__default.createElement("div", Object.assign({
      className: clsx(classes.col, className)
    }, props), children);
  };

  var useStyles$1 = reactJss.createUseStyles({
    grid: function grid(_ref) {
      var nested = _ref.nested;
      return {
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        margin: nested ? '-16px -16px 0 -16px' : '-16px 0 0 0',
        padding: '0 8px'
      };
    }
  });

  var Grid = function Grid(_ref) {
    var children = _ref.children,
        className = _ref.className,
        nested = _ref.nested,
        props = _objectWithoutProperties(_ref, ["children", "className", "nested"]);

    var theme = useTheme();
    var classes = useStyles$1({
      nested: nested,
      theme: theme
    });
    return /*#__PURE__*/React__default.createElement("div", Object.assign({
      className: clsx(classes.grid, className)
    }, props), children);
  };

  Grid.defaultProps = {
    nested: false
  };

  var useStyles$2 = reactJss.createUseStyles({
    page: {
      padding: '16px 0'
    }
  });

  var Page = function Page(_ref) {
    var children = _ref.children,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ["children", "className"]);

    var theme = useTheme();
    var classes = useStyles$2({
      theme: theme
    });
    return /*#__PURE__*/React__default.createElement("div", Object.assign({
      className: clsx(classes.page, className)
    }, props), children);
  };

  var useStyles$3 = reactJss.createUseStyles({
    wrapper: function wrapper(_ref) {
      var disabled = _ref.disabled,
          theme = _ref.theme;
      return {
        color: disabled ? 'rgb(151, 160, 175)' : theme.palette.text.base,
        display: 'flex',
        alignItems: 'flex-start'
      };
    },
    box: {
      display: 'flex',
      flexShrink: '0',
      position: 'relative',
      '& > input': {
        left: '50%',
        margin: '0px',
        opacity: '0',
        padding: '0',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        pointerEvents: 'none'
      }
    },
    boxSpan: function boxSpan(_ref2) {
      var disabled = _ref2.disabled,
          theme = _ref2.theme,
          value = _ref2.value;
      return {
        lineHeight: '0',
        flexShrink: '0',
        color: disabled ? 'rgb(244, 245, 247)' : value ? theme.palette.primary.main : 'rgb(250, 251, 252)',
        fill: disabled ? 'transparent' : value ? 'rgb(250, 251, 252)' : 'transparent',
        transition: 'all .2s ease-in-out 0s',
        '&:hover': {
          color: disabled ? 'rgb(244, 245, 247)' : value ? theme.palette.primary.light : 'rgb(235, 236, 240)'
        },
        '& > span': {
          display: 'flex',
          height: '24px',
          width: '24px',
          '& > svg': {
            height: '24px',
            width: '24px',
            maxHeight: '100%',
            maxWidth: '100%',
            pointerEvents: 'none',
            fill: 'inherit',
            '& > g': {
              '& > rect': {
                transition: 'stroke .2s ease-in-out 0s',
                stroke: disabled ? 'default' : value ? 'currentcolor' : 'rgb(233, 225, 230)',
                stokeWidth: '2px'
              }
            }
          }
        }
      };
    },
    label: {
      padding: '2px 4px'
    }
  });

  var Checkbox = function Checkbox(_ref) {
    var className = _ref.className,
        disabled = _ref.disabled,
        field = _ref.field,
        label = _ref.label,
        style = _ref.style,
        props = _objectWithoutProperties(_ref, ["className", "disabled", "field", "label", "style"]);

    var theme = useTheme();
    var classes = useStyles$3({
      disabled: disabled,
      theme: theme,
      value: field.value
    });
    return /*#__PURE__*/React__default.createElement("label", {
      className: clsx(classes.wrapper, className),
      style: style
    }, /*#__PURE__*/React__default.createElement("span", {
      className: classes.box
    }, /*#__PURE__*/React__default.createElement("input", Object.assign({}, field, props, {
      disabled: disabled,
      type: 'checkbox'
    })), /*#__PURE__*/React__default.createElement("span", {
      className: classes.boxSpan
    }, /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement("svg", {
      width: '24',
      height: '24',
      viewBox: '0 0 24 24',
      focusable: 'false',
      role: 'presentation'
    }, /*#__PURE__*/React__default.createElement("g", {
      "fill-rule": 'evenodd'
    }, /*#__PURE__*/React__default.createElement("rect", {
      fill: 'currentColor',
      x: '6',
      y: '6',
      width: '12',
      height: '12',
      rx: '2'
    }), /*#__PURE__*/React__default.createElement("path", {
      d: 'M9.707 11.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L11 12.586l-1.293-1.293z',
      fill: 'inherit'
    })))))), /*#__PURE__*/React__default.createElement("span", {
      className: classes.label
    }, label));
  };

  var useStyles$4 = reactJss.createUseStyles({
    input: {
      backgroundColor: 'transparent',
      border: '0 none',
      boxSizing: 'border-box',
      color: 'inherit',
      cursor: 'inherit',
      fontFamily: 'inherit',
      height: '2.6em',
      minWidth: '0',
      outline: 'currentcolor none medium',
      padding: '8px 6px',
      width: '100%',
      '&:disabled::placeholder': {
        color: 'rgb(165, 173, 186)',
        opacity: '1'
      }
    },
    wrapper: function wrapper(_ref) {
      var disabled = _ref.disabled,
          theme = _ref.theme;
      return {
        alignItems: 'center',
        backgroundColor: 'rgb(250, 251, 252)',
        border: '2px solid rgb(233, 225, 230)',
        borderRadius: '3px',
        boxSizing: 'border-box',
        cursor: 'text',
        display: 'flex',
        flex: '1 1 100%',
        justifyContent: 'space-between',
        maxWidth: '100%',
        overflow: 'hidden',
        overflowWrap: 'break-word',
        pointerEvents: 'auto',
        transition: 'background-color .2s ease-in-out 0s, border-color .2s ease-in-out 0s',
        verticalAlign: 'top',
        '&:hover': {
          backgroundColor: disabled ? 'rgb(250, 251, 252)' : 'rgb(235, 236, 240)'
        },
        '&:focus-within': {
          backgroundColor: 'rgb(255, 255, 255)',
          borderColor: theme.palette.primary.main
        }
      };
    },
    label: function label(_ref2) {
      var theme = _ref2.theme;
      return {
        color: theme.palette.text.muted,
        fontSize: '.85rem'
      };
    },
    requiredSpan: function requiredSpan(_ref3) {
      var theme = _ref3.theme;
      return {
        color: theme.palette.danger.main
      };
    }
  });

  var Textarea = function Textarea(_ref) {
    var className = _ref.className,
        disabled = _ref.disabled,
        field = _ref.field,
        label = _ref.label,
        required = _ref.required,
        props = _objectWithoutProperties(_ref, ["className", "disabled", "field", "label", "required"]);

    var theme = useTheme();
    var classes = useStyles$4({
      disabled: disabled,
      theme: theme
    });
    return /*#__PURE__*/React__default.createElement("div", null, label && /*#__PURE__*/React__default.createElement("label", {
      className: classes.label
    }, label, required && /*#__PURE__*/React__default.createElement("span", {
      className: classes.requiredSpan
    }, " *")), /*#__PURE__*/React__default.createElement("div", {
      className: classes.wrapper
    }, /*#__PURE__*/React__default.createElement("textarea", Object.assign({
      className: clsx(classes.input, className)
    }, field, props, {
      disabled: disabled,
      required: false
    }))));
  };

  var useStyles$5 = reactJss.createUseStyles({
    input: {
      backgroundColor: 'transparent',
      border: '0 none',
      boxSizing: 'border-box',
      color: 'inherit',
      cursor: 'inherit',
      fontFamily: 'inherit',
      height: '2.6em',
      minWidth: '0',
      outline: 'currentcolor none medium',
      padding: '8px 6px',
      width: '100%',
      '&:disabled::placeholder': {
        color: 'rgb(165, 173, 186)',
        opacity: '1'
      }
    },
    wrapper: function wrapper(_ref) {
      var disabled = _ref.disabled,
          theme = _ref.theme;
      return {
        alignItems: 'center',
        backgroundColor: 'rgb(250, 251, 252)',
        border: '2px solid rgb(233, 225, 230)',
        borderRadius: '3px',
        boxSizing: 'border-box',
        cursor: 'text',
        display: 'flex',
        flex: '1 1 100%',
        justifyContent: 'space-between',
        maxWidth: '100%',
        overflow: 'hidden',
        overflowWrap: 'break-word',
        pointerEvents: 'auto',
        transition: 'background-color .2s ease-in-out 0s, border-color .2s ease-in-out 0s',
        verticalAlign: 'top',
        '&:hover': {
          backgroundColor: disabled ? 'rgb(250, 251, 252)' : 'rgb(235, 236, 240)'
        },
        '&:focus-within': {
          backgroundColor: 'rgb(255, 255, 255)',
          borderColor: theme.palette.primary.main
        }
      };
    },
    label: function label(_ref2) {
      var theme = _ref2.theme;
      return {
        color: theme.palette.text.muted,
        fontSize: '.85rem'
      };
    },
    requiredSpan: function requiredSpan(_ref3) {
      var theme = _ref3.theme;
      return {
        color: theme.palette.danger.main
      };
    }
  });

  var Textfield = function Textfield(_ref) {
    var className = _ref.className,
        disabled = _ref.disabled,
        field = _ref.field,
        label = _ref.label,
        required = _ref.required,
        props = _objectWithoutProperties(_ref, ["className", "disabled", "field", "label", "required"]);

    var theme = useTheme();
    var classes = useStyles$5({
      disabled: disabled,
      theme: theme
    });
    return /*#__PURE__*/React__default.createElement("div", null, label && /*#__PURE__*/React__default.createElement("label", {
      className: classes.label
    }, label, required && /*#__PURE__*/React__default.createElement("span", {
      className: classes.requiredSpan
    }, " *")), /*#__PURE__*/React__default.createElement("div", {
      className: classes.wrapper
    }, /*#__PURE__*/React__default.createElement("input", Object.assign({
      className: clsx(classes.input, className)
    }, field, props, {
      disabled: disabled,
      type: 'text',
      required: false
    }))));
  };

  exports.Checkbox = Checkbox;
  exports.Col = Col;
  exports.Grid = Grid;
  exports.Page = Page;
  exports.Textarea = Textarea;
  exports.Textfield = Textfield;
  exports.ThemeProvider = ThemeProvider;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
