import { css, jsx } from '@emotion/core';
import { Fragment, createElement } from 'react';
import { useTransition, animated } from 'react-spring';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\",\n        \"Apple SD Gothic Neo\", \"Malgun Gothic\", \"\uB9D1\uC740 \uACE0\uB515\", \uB098\uB214\uACE0\uB515,\n        \"Nanum Gothic\", \"Noto Sans KR\", \"Noto Sans CJK KR\", arial, \uB3CB\uC6C0, Dotum,\n        Tahoma, Geneva, sans-serif;\n\n    letter-spacing: -0.5px;\n    font-weight: 500;\n    color: #424242;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var globalStyle = css(_templateObject());

var color = {
  main: "#7950f2",
  sub: "#845ef7",
  hover: "#9775fa",
  disabled: "#e5dbff"
};
var gray = {
  main: "#343a40",
  sub: "#e9ecef",
  hover: "#f1f3f5",
  disabled: "#c6d3e1"
};

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 4rem;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n        width: 3rem;\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n        width: 2.5rem;\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n        width: 1.75rem;\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 50%;\n    padding: 0;\n    svg {\n        margin: 0;\n    }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        height: 2.25rem;\n        font-size: 1.125rem;\n        padding: 0 1.25rem;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        height: 2rem;\n        font-size: 1rem;\n        padding: 0 1rem;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        height: 1.75rem;\n        font-size: 1rem;\n        padding: 0 0.875rem;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        border: 1.4px solid ", ";\n        color: ", ";\n        background: none;\n        &:hover:enabled {\n            background: ", ";\n            color: white;\n        }\n\n        &:disabled {\n            color: ", ";\n            border-color: ", ";\n            svg {\n                fill: ", ";\n            }\n        }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        background: none;\n        color: ", ";\n        border: 1.4px solid ", ";\n        &:hover:enabled {\n            color: ", ";\n            border-color: ", ";\n        }\n\n        &:disabled {\n            color: ", ";\n            border-color: ", ";\n            svg {\n                fill: ", ";\n            }\n        }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        background: ", ";\n        color: ", ";\n        &:hover:enabled {\n            background: ", ";\n        }\n\n        &:disabled {\n            color: white;\n            svg {\n                fill: ", ";\n            }\n        }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        background: ", ";\n        color: white;\n        svg {\n            fill: white;\n        }\n        &:hover:enabled {\n            background: ", ";\n        }\n\n        &:disabled {\n            background: ", ";\n        }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    outline: none;\n    border: none;\n    box-sizing: border-box;\n    height: 2rem;\n    font-size: 0.875rem;\n    padding: 0.5rem;\n    background: ", ";\n    color: white;\n    border-radius: 0.25rem;\n    line-height: 1;\n    font-weight: 600;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    &:disabled {\n        cursor: not-allowed;\n    }\n    svg {\n        width: 1em;\n        margin-right: 1em;\n    }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

var Button = function Button(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      size = _ref.size,
      disabled = _ref.disabled,
      width = _ref.width,
      onClick = _ref.onClick,
      iconOnly = _ref.iconOnly,
      radius = _ref.radius,
      className = _ref.className;
  return jsx("button", {
    css: [globalStyle, style, themes[theme], sizes[size], {
      width: width
    }, radius && radiusStyle, iconOnly && [iconOnlyStyle, iconOnlySizes[size]]],
    disabled: disabled,
    onClick: onClick,
    className: className
  }, children);
};

Button.defaultProps = {
  theme: "primary",
  size: "small"
};
var style = css(_templateObject$1(), color.main);
var themes = {
  primary: css(_templateObject2(), color.main, color.sub, color.disabled),
  secondary: css(_templateObject3(), gray.sub, gray.main, gray.hover, gray.hover),
  tertiary: css(_templateObject4(), color.main, color.main, color.hover, color.hover, color.disabled, color.disabled, color.disabled),
  bordered: css(_templateObject5(), gray.main, gray.main, gray.main, gray.disabled, gray.disabled, gray.disabled)
};
var sizes = {
  small: css(_templateObject6()),
  medium: css(_templateObject7()),
  large: css(_templateObject8())
};
var iconOnlyStyle = css(_templateObject9());
var iconOnlySizes = {
  small: css(_templateObject10()),
  medium: css(_templateObject11()),
  large: css(_templateObject12())
};
var radiusStyle = css(_templateObject13());

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n    justify-content:flex-end;\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n        flex-direction:column;\n    "]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n        flex-direction:row;\n    "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}

var ButtonGroup = function ButtonGroup(_ref) {
  var children = _ref.children,
      direction = _ref.direction,
      rightAlign = _ref.rightAlign,
      gap = _ref.gap,
      className = _ref.className;
  return jsx("div", {
    css: [style$1, flex[direction], rightAlign && rightAlignStyle, gapStyle(direction, gap)],
    className: className
  }, children);
};

ButtonGroup.defaultProps = {
  direction: 'row',
  gap: '0.5rem'
};
var style$1 = css(_templateObject$2());
var flex = {
  row: css(_templateObject2$1()),
  column: css(_templateObject3$1())
};
var rightAlignStyle = css(_templateObject4$1());

var gapStyle = function gapStyle(direction, gap) {
  var marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
  return css({
    'button + button': _defineProperty({}, marginType, gap)
  });
};

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 3rem;\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    border-radius: 4px;\n    width: 25rem;\n    background: white;\n    box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);\n    padding: 1.5rem;\n    h3 {\n        font-size: 1.5rem;\n        color: #343a40;\n        margin-top: 0;\n        margin-bottom: 1rem;\n    }\n    p {\n        font-size: 1rem;\n        margin: 0;\n        color: #868e96;\n    }\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n    z-index: 500;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 400;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

var Dialog = function Dialog(_ref) {
  var title = _ref.title,
      description = _ref.description,
      cancelable = _ref.cancelable,
      cancelText = _ref.cancelText,
      confirmText = _ref.confirmText,
      children = _ref.children,
      hideButton = _ref.hideButton,
      visible = _ref.visible,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm;
  var fadeTransition = useTransition(visible, null, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });
  var slideUpTransition = useTransition(visible, null, {
    from: {
      transform: "translateY(200px) scale(0.8)",
      opacity: 0
    },
    enter: {
      transform: "translateY(0px) scale(1)",
      opacity: 1
    },
    leave: {
      transform: "translateY(200px) scale(0.8)",
      opacity: 0
    },
    config: {
      tension: 200,
      friction: 10
    }
  });
  return jsx(Fragment, null, fadeTransition.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        props = _ref2.props;
    return item ? jsx(animated.div, {
      css: [fullScreen, darkBackground],
      key: key,
      style: props
    }) : null;
  }), slideUpTransition.map(function (_ref3) {
    var item = _ref3.item,
        key = _ref3.key,
        props = _ref3.props;
    return item ? jsx(animated.div, {
      css: [fullScreen, whiteBoxWrapper],
      style: props,
      key: key
    }, jsx("div", {
      css: [whiteBox, globalStyle]
    }, title && jsx("h3", null, title), description && jsx("p", null, description), children, hideButton || jsx(ButtonGroup, {
      css: style$2,
      rightAlign: true
    }, cancelable && jsx(Button, {
      onClick: onCancel,
      theme: "tertiary",
      size: "medium"
    }, cancelText), jsx(Button, {
      onClick: onConfirm,
      size: "medium"
    }, confirmText)))) : null;
  }));
};

Dialog.defaultProps = {
  cancelText: "취소",
  confirmText: "확인"
};
var fullScreen = css(_templateObject$3());
var darkBackground = css(_templateObject2$2());
var whiteBoxWrapper = css(_templateObject3$2());
var whiteBox = css(_templateObject4$2());
var style$2 = css(_templateObject5$1());

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n\n    margin-top:0.5rem;\n    h2{\n        margin: 0;\n        cursor:pointer;\n    }\n    p {\n        margin:0;\n        line-height:1.5;\n        margin-top:0.5rem;\n        white-space: normal;\n    }\n    \n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n    background:black;\n    margin-right:1rem;\n    border-radius:4px;\n    img {\n        display:block;\n        width: 10rem; \n        height: 6rem;\n        object-fit:cover;\n        border-radius:4px;\n        cursor:pointer;\n    }\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n    width:20rem;\n    padding:1rem;\n    display:flex;\n\n    & + & {\n        margin-top: 3rem;\n    }\n    &:hover {\n        box-shadow: 0px 0px 10px rgba(0,0,0,0.2);\n    }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

var Item = function Item(_ref) {
  var hideImage = _ref.hideImage,
      image = _ref.image,
      title = _ref.title,
      description = _ref.description,
      children = _ref.children,
      className = _ref.className,
      width = _ref.width;
  return jsx("div", {
    css: [itemBox, {
      width: width
    }],
    className: className
  }, !hideImage && jsx("div", {
    css: thumbnail
  }, jsx("img", {
    src: image,
    alt: "image"
  })), jsx("div", {
    css: contents
  }, jsx("h2", null, title), jsx("p", null, description), children));
};

Item.defaultProps = {
  hideImage: false,
  title: '이미지',
  description: '이미지 설명'
};
var itemBox = css(_templateObject$4());
var thumbnail = css(_templateObject2$3());
var contents = css(_templateObject3$3());

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    align-items:center;\n    & > button {\n        margin-right:0.5rem;\n    }\n    & img {\n        display:block;\n        height:2.5rem;\n        width:2.5rem;\n        object-fit:cover;\n        border-radius:50%;\n        box-shadow: 0px 0px 8px rgba(0,0,0,0.086);\n    }\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n    white-space:pre;\n    &:hover {\n        color: #495057;\n    }\n    & + & {\n        margin-left:2rem;\n    }\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n    font-size:1.125rem;  \n    &:hover {\n        color: #495057;\n    }\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    align-items:center;\n    justify-content:space-between;\n    font-weight:800;\n    padding:0.75rem 1rem;\n    border-bottom: 1px solid rgb(233, 236, 239);\n    & > div {\n        cursor:pointer;\n        color:#424242;\n        text-decoration:none;\n    }\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}

var Header = function Header(_ref) {
  var onClickLogo = _ref.onClickLogo,
      onClickItem = _ref.onClickItem,
      onClickButton = _ref.onClickButton,
      onClickProfile = _ref.onClickProfile,
      header = _ref.header,
      buttonText = _ref.buttonText,
      hideButton = _ref.hideButton,
      logoText = _ref.logoText,
      profileUrl = _ref.profileUrl,
      hideProfile = _ref.hideProfile;
  return jsx("div", {
    css: container
  }, jsx("div", {
    css: logo,
    onClick: onClickLogo
  }, logoText), jsx("div", {
    css: list
  }, header.map(function (item) {
    return jsx("div", {
      css: listItem,
      key: Item.name,
      onClick: onClickItem
    }, item.text);
  })), jsx("div", {
    css: right
  }, !hideButton && jsx(Button, {
    theme: "bordered",
    size: "medium",
    radius: true,
    onClick: onClickButton
  }, buttonText), jsx("div", null, !hideProfile && jsx("img", {
    src: profileUrl,
    alt: "",
    onClick: onClickProfile
  }))));
};

Header.defaultProps = {
  buttonText: '로그인',
  logoText: "Let's shadow",
  hideButton: false,
  hideProfile: false
};
var container = css(_templateObject$5());
var logo = css(_templateObject2$4());
var list = css(_templateObject3$4());
var listItem = css(_templateObject4$3());
var right = css(_templateObject5$2());

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _ref =
/*#__PURE__*/
createElement("path", {
  d: "M24 20.188l-8.315-8.209 8.2-8.282L20.188 0l-8.212 8.318L3.666.115 0 3.781l8.321 8.24-8.206 8.313L3.781 24l8.237-8.318 8.285 8.203z"
});

function SvgExit(props) {
  return createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
}

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var _ref$1 =
/*#__PURE__*/
createElement("path", {
  d: "M18 1l-6 4-6-4-6 5v7l12 10 12-10V6z"
});

function SvgHeart(props) {
  return createElement("svg", _extends$1({
    width: 24,
    height: 24
  }, props), _ref$1);
}

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var _ref$2 =
/*#__PURE__*/
createElement("path", {
  d: "M7.127 22.564L.001 24l1.438-7.125 5.688 5.689zM2.853 15.46l5.688 5.689 15.46-15.46L18.312 0 2.853 15.46z"
});

function SvgPencil(props) {
  return createElement("svg", _extends$2({
    width: 24,
    height: 24
  }, props), _ref$2);
}



var icons = /*#__PURE__*/Object.freeze({
  __proto__: null,
  exit: SvgExit,
  heart: SvgHeart,
  pencil: SvgPencil
});

/** @jsx jsx */

var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      color = _ref.color,
      size = _ref.size,
      className = _ref.className;
  var SVGIcon = icons[icon];
  return jsx(SVGIcon, {
    css: {
      fill: color || 'currentColor',
      width: size,
      height: 'auto'
    },
    className: className
  });
};

export { Button, ButtonGroup, Dialog, Header, Icon, Item };
