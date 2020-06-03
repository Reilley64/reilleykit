'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var clsx = _interopDefault(require('clsx'));
var React = require('react');
var React__default = _interopDefault(React);
var reactJss = require('react-jss');
var Color = _interopDefault(require('color'));

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
  var classes = useStyles$3({
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

exports.Col = Col;
exports.Grid = Grid;
exports.Page = Page;
exports.TextField = Textfield;
exports.ThemeProvider = ThemeProvider;
