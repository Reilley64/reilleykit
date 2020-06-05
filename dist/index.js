(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('clsx'), require('react'), require('react-jss'), require('color'), require('react-cool-onclickoutside'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/react-fontawesome')) :
  typeof define === 'function' && define.amd ? define(['exports', 'clsx', 'react', 'react-jss', 'color', 'react-cool-onclickoutside', '@fortawesome/free-solid-svg-icons', '@fortawesome/react-fontawesome'], factory) :
  (global = global || self, factory(global.reilleykit = {}, global.clsx, global.React, global.reactJss, global.Color, global.useOnclickOutside, global.freeSolidSvgIcons, global.reactFontawesome));
}(this, (function (exports, clsx, React, reactJss, Color, useOnclickOutside, freeSolidSvgIcons, reactFontawesome) { 'use strict';

  clsx = clsx && Object.prototype.hasOwnProperty.call(clsx, 'default') ? clsx['default'] : clsx;
  var React__default = 'default' in React ? React['default'] : React;
  Color = Color && Object.prototype.hasOwnProperty.call(Color, 'default') ? Color['default'] : Color;
  useOnclickOutside = useOnclickOutside && Object.prototype.hasOwnProperty.call(useOnclickOutside, 'default') ? useOnclickOutside['default'] : useOnclickOutside;

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
    button: function button(_ref) {
      var color = _ref.color,
          theme = _ref.theme;
      return {
        alignItems: 'baseline',
        borderWidth: '0',
        cursor: 'pointer',
        display: 'inline-flex',
        fontWeight: '500',
        maxWidth: '100%',
        outline: 'none',
        textAlign: 'center',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        background: color ? theme.palette[color].main : 'rgba(9, 30, 66, .04)',
        borderRadius: '.1875rem',
        color: color ? 'rgb(255, 255, 255)' : 'rgb(66, 82, 110)',
        height: '2.29rem',
        padding: '0 .5rem',
        transition: 'background 0.1s ease-out',
        verticalAlign: 'middle',
        width: 'auto',
        '&:hover': {
          background: color ? theme.palette[color].light : 'rgba(9, 30, 66, .08)'
        },
        '&:focus': {
          background: color ? theme.palette[color].dark : 'rgba(179, 212, 255, .8)',
          color: color ? 'rgb(255, 255, 255)' : theme.palette.primary.main
        },
        '& span': {
          alignSelf: 'center',
          flex: '1 1 auto',
          margin: '0 .25rem',
          maxWidth: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          transition: 'opacity 0.3s ease 0s',
          opacity: '1'
        }
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

  var Button = function Button(_ref) {
    var className = _ref.className,
        children = _ref.children,
        color = _ref.color,
        disabled = _ref.disabled,
        required = _ref.required,
        type = _ref.type,
        props = _objectWithoutProperties(_ref, ["className", "children", "color", "disabled", "required", "type"]);

    var theme = useTheme();
    var classes = useStyles({
      color: color,
      disabled: disabled,
      theme: theme
    });
    return /*#__PURE__*/React__default.createElement("button", Object.assign({
      className: clsx(classes.button, className)
    }, props, {
      type: type || 'button'
    }), /*#__PURE__*/React__default.createElement("span", null, children));
  };

  var useStyles$1 = reactJss.createUseStyles({
    card: {
      display: 'flex',
      flexDirection: 'column',
      padding: '1rem',
      borderRadius: '.1875rem',
      boxShadow: 'rgba(9, 30, 66, .25) 0 .0625rem .0625rem, rgba(9, 30, 66, .31) 0 0 .0625rem 0'
    }
  });

  var Card = function Card(_ref) {
    var children = _ref.children,
        classname = _ref.classname;
    var theme = useTheme();
    var classes = useStyles$1({
      theme: theme
    });
    return /*#__PURE__*/React__default.createElement("div", {
      className: clsx(classes.card, classname)
    }, children);
  };

  var useStyles$2 = reactJss.createUseStyles({
    menu: {
      backgroundColor: 'rgb(255, 255, 255)',
      borderRadius: '.1875rem',
      overflowY: 'auto',
      willChange: 'transform',
      minWidth: '20rem',
      padding: '.375rem 0'
    }
  });

  var Menu = function Menu(_ref) {
    var children = _ref.children,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ["children", "className"]);

    var theme = useTheme();
    var classes = useStyles$2({
      theme: theme
    });
    return /*#__PURE__*/React__default.createElement("div", Object.assign({
      className: clsx(classes.menu, className)
    }, props), children);
  };

  var useStyles$3 = reactJss.createUseStyles({
    col: function col(_ref) {
      var size = _ref.size;
      return {
        alignSelf: 'stretch',
        flex: "1 0 calc(100% / 12 * ".concat(size, " - 1rem)"),
        margin: '1rem .5rem 0 .5rem',
        maxWidth: "calc(100% / 12 * ".concat(size, " - 1rem)"),
        minWidth: 'calc(100% / 12 - 1rem)',
        overflowWrap: 'break-word',
        transition: 'max-width 300ms cubic-bezier(.4, 0, .2, 1)'
      };
    }
  });

  var Col = function Col(_ref) {
    var children = _ref.children,
        className = _ref.className,
        size = _ref.size,
        props = _objectWithoutProperties(_ref, ["children", "className", "size"]);

    var theme = useTheme();
    var classes = useStyles$3({
      size: size,
      theme: theme
    });
    return /*#__PURE__*/React__default.createElement("div", Object.assign({
      className: clsx(classes.col, className)
    }, props), children);
  };

  var useStyles$4 = reactJss.createUseStyles({
    grid: function grid(_ref) {
      var nested = _ref.nested;
      return {
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        margin: nested ? '-1rem -1rem 0 -1rem' : '-1rem 0 0 0',
        padding: '0 .5rem'
      };
    }
  });

  var Grid = function Grid(_ref) {
    var children = _ref.children,
        className = _ref.className,
        nested = _ref.nested,
        props = _objectWithoutProperties(_ref, ["children", "className", "nested"]);

    var theme = useTheme();
    var classes = useStyles$4({
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

  var useStyles$5 = reactJss.createUseStyles({
    page: function page(_ref) {
      var compact = _ref.compact;
      return {
        padding: compact ? '1rem 28.5rem' : '1rem 14.25rem'
      };
    }
  });

  var Page = function Page(_ref) {
    var children = _ref.children,
        className = _ref.className,
        compact = _ref.compact,
        props = _objectWithoutProperties(_ref, ["children", "className", "compact"]);

    var theme = useTheme();
    var classes = useStyles$5({
      compact: compact,
      theme: theme
    });
    return /*#__PURE__*/React__default.createElement("div", Object.assign({
      className: clsx(classes.page, className)
    }, props), children);
  };

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  var useStyles$6 = reactJss.createUseStyles({
    container: {
      position: 'relative'
    },
    popup: {
      boxShadow: '0 0 0 .0625rem hsla(0, 0%, 0%, .1), 0 .25rem .6875rem hsla(0, 0%, 0%, .1)',
      margin: '.5rem 0',
      position: 'absolute',
      top: '100%',
      zIndex: '1'
    }
  });

  var Popup = function Popup(_ref) {
    var button = _ref.button,
        children = _ref.children,
        className = _ref.className,
        style = _ref.style,
        props = _objectWithoutProperties(_ref, ["button", "children", "className", "style"]);

    var theme = useTheme();
    var classes = useStyles$6({
      theme: theme
    });
    var ref = React.useRef();

    var _useState = React.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        open = _useState2[0],
        setOpen = _useState2[1];

    useOnclickOutside(ref, function () {
      setOpen(false);
    });

    if (button) {
      return /*#__PURE__*/React__default.createElement("div", {
        className: clsx(classes.container, className),
        ref: ref
      }, React__default.cloneElement(button, {
        onClick: function onClick() {
          if (button.props.onClick) button.props.onClick();
          setOpen(true);
        }
      }), open && /*#__PURE__*/React__default.createElement(Menu, Object.assign({
        className: classes.popup
      }, props), children));
    }

    return /*#__PURE__*/React__default.createElement(Menu, Object.assign({
      className: clsx(classes.popup, className)
    }, props), children);
  };

  Popup.defaultProps = {
    style: {}
  };

  var useStyles$7 = reactJss.createUseStyles({
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
        margin: '0',
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
          height: '1.5rem',
          width: '1.5rem',
          '& > svg': {
            height: '1.5rem',
            width: '1.5rem',
            maxHeight: '100%',
            maxWidth: '100%',
            pointerEvents: 'none',
            fill: 'inherit',
            '& > g': {
              '& > rect': {
                transition: 'stroke .2s ease-in-out 0s',
                stroke: disabled ? 'default' : value ? 'currentcolor' : 'rgb(233, 225, 230)',
                stokeWidth: '.125rem'
              }
            }
          }
        }
      };
    },
    label: {
      padding: '.125rem .25rem'
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
    var classes = useStyles$7({
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

  function _createForOfIteratorHelper(o) {
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
        var i = 0;

        var F = function F() {};

        return {
          s: F,
          n: function n() {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function e(_e) {
            throw _e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var it,
        normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function s() {
        it = o[Symbol.iterator]();
      },
      n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function e(_e2) {
        didErr = true;
        err = _e2;
      },
      f: function f() {
        try {
          if (!normalCompletion && it["return"] != null) it["return"]();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var useStyles$8 = reactJss.createUseStyles({
    container: {
      position: 'relative'
    },
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
      padding: '.5rem .375rem',
      width: '100%',
      '&:disabled::placeholder': {
        color: 'rgb(165, 173, 186)',
        opacity: '1'
      }
    },
    endAdornment: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: '.75rem',
      '& svg': {
        color: 'rgb(66, 82, 110)',
        fontSize: '.5625rem'
      }
    },
    wrapper: function wrapper(_ref) {
      var disabled = _ref.disabled,
          theme = _ref.theme;
      return {
        alignItems: 'center',
        backgroundColor: 'rgb(250, 251, 252)',
        border: '.125rem solid rgb(233, 225, 230)',
        borderRadius: '.1875rem',
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

  var Select = function Select(_ref) {
    var className = _ref.className,
        children = _ref.children,
        disabled = _ref.disabled,
        field = _ref.field,
        form = _ref.form,
        label = _ref.label,
        required = _ref.required,
        props = _objectWithoutProperties(_ref, ["className", "children", "disabled", "field", "form", "label", "required"]);

    var theme = useTheme();
    var classes = useStyles$8({
      disabled: disabled,
      theme: theme
    });
    var ref = React.useRef();

    var _useState = React.useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        open = _useState2[0],
        setOpen = _useState2[1];

    var _useState3 = React.useState(''),
        _useState4 = _slicedToArray(_useState3, 2),
        value = _useState4[0],
        setValue = _useState4[1];

    var getLabel = function getLabel() {
      var _iterator = _createForOfIteratorHelper(Array.isArray(children) ? children : [children]),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          if (option.props.value === field.value) return option.props.children;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return '';
    };

    useOnclickOutside(ref, function () {
      setOpen(false);
      setValue(getLabel());
      field.onBlur(field.name);
    });
    React.useEffect(function () {
      setValue(getLabel());
      field.onBlur(field.name);
    }, [field.value]);
    return /*#__PURE__*/React__default.createElement("div", {
      className: classes.container,
      ref: ref
    }, label && /*#__PURE__*/React__default.createElement("label", {
      className: classes.label
    }, label, required && /*#__PURE__*/React__default.createElement("span", {
      className: classes.requiredSpan
    }, " *")), /*#__PURE__*/React__default.createElement("div", {
      className: classes.wrapper
    }, /*#__PURE__*/React__default.createElement("input", Object.assign({
      className: clsx(classes.input, className)
    }, props, {
      disabled: disabled,
      name: field.name,
      onChange: function onChange(e) {
        return setValue(e.target.value);
      },
      onFocus: function onFocus() {
        setValue('');
        setOpen(true);
      },
      required: false,
      type: 'text',
      value: value
    })), /*#__PURE__*/React__default.createElement("div", {
      className: classes.endAdornment
    }, /*#__PURE__*/React__default.createElement(reactFontawesome.FontAwesomeIcon, {
      icon: freeSolidSvgIcons.faChevronDown
    }))), open && /*#__PURE__*/React__default.createElement(Popup, {
      style: {
        maxHeight: '18.75rem'
      }
    }, (Array.isArray(children) ? children : [children]).filter(function (child) {
      return child.props.children.startsWith(value);
    }).map(function (child) {
      return React__default.cloneElement(child, {
        field: field,
        form: form,
        getLabel: getLabel,
        setOpen: setOpen,
        setValue: setValue
      });
    })));
  };

  var useStyles$9 = reactJss.createUseStyles({
    item: {
      display: 'block',
      padding: '.375rem .75rem',
      width: '100%',
      userSelect: 'none',
      '&:hover': {
        backgroundColor: 'rgb(235, 236, 240)'
      }
    }
  });

  var SelectItem = function SelectItem(_ref) {
    var children = _ref.children,
        field = _ref.field,
        form = _ref.form,
        getLabel = _ref.getLabel,
        setOpen = _ref.setOpen,
        setValue = _ref.setValue,
        value = _ref.value;
    var theme = useTheme();
    var classes = useStyles$9({
      theme: theme
    });
    return /*#__PURE__*/React__default.createElement("div", {
      className: classes.item,
      onClick: function onClick() {
        setValue(getLabel());
        setOpen(false);
        form.setFieldValue(field.name, value);
      }
    }, children);
  };

  var useStyles$a = reactJss.createUseStyles({
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
      padding: '.5rem .375rem',
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
        border: '.125rem solid rgb(233, 225, 230)',
        borderRadius: '.1875rem',
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
    var classes = useStyles$a({
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

  var useStyles$b = reactJss.createUseStyles({
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
      padding: '.5rem .375rem',
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
        border: '.125rem solid rgb(233, 225, 230)',
        borderRadius: '.1875rem',
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
    var classes = useStyles$b({
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

  exports.Button = Button;
  exports.Card = Card;
  exports.Checkbox = Checkbox;
  exports.Col = Col;
  exports.Grid = Grid;
  exports.Menu = Menu;
  exports.Page = Page;
  exports.Popup = Popup;
  exports.Select = Select;
  exports.SelectItem = SelectItem;
  exports.Textarea = Textarea;
  exports.Textfield = Textfield;
  exports.ThemeProvider = ThemeProvider;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
