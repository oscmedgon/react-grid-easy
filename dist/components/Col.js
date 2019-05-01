"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Col =
/*#__PURE__*/
function (_Component) {
  _inherits(Col, _Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, _getPrototypeOf(Col).apply(this, arguments));
  }

  _createClass(Col, [{
    key: "render",
    value: function render() {
      var params = {
        col: {
          style: this.props.style,
          className: this.props.className
        },
        offset: {
          className: ''
        }
      };
      var _this$props = this.props,
          xs = _this$props.xs,
          sm = _this$props.sm,
          md = _this$props.md,
          lg = _this$props.lg;
      var _this$props2 = this.props,
          xsOffset = _this$props2.xsOffset,
          smOffset = _this$props2.smOffset,
          mdOffset = _this$props2.mdOffset,
          lgOffset = _this$props2.lgOffset;
      xsOffset = xsOffset || '0';
      smOffset = smOffset || xsOffset;
      mdOffset = mdOffset || smOffset || xsOffset;
      lgOffset = lgOffset || mdOffset || smOffset || xsOffset;

      if (xs) {
        params.col.className += ' col-xs-' + xs;
      }

      if (sm) {
        params.col.className += ' col-sm-' + sm;
      }

      if (md) {
        params.col.className += ' col-md-' + md;
      }

      if (lg) {
        params.col.className += ' col-lg-' + lg;
      }

      if (xsOffset) {
        params.offset.className += ' col-xs-offset-' + xsOffset;
      }

      if (smOffset) {
        params.offset.className += ' col-sm-offset-' + smOffset;
      }

      if (mdOffset) {
        params.offset.className += ' col-md-offset-' + mdOffset;
      }

      if (lgOffset) {
        params.offset.className += ' col-lg-offset-' + lgOffset;
      }

      return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("section", _extends({
        key: "offset"
      }, params.offset)), _react["default"].createElement("section", _extends({
        key: "col"
      }, params.col), this.props.children));
    }
  }]);

  return Col;
}(_react.Component);

exports["default"] = Col;

_defineProperty(Col, "propTypes", {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  xs: _propTypes["default"].string,
  sm: _propTypes["default"].string,
  md: _propTypes["default"].string,
  lg: _propTypes["default"].string,
  xsOffset: _propTypes["default"].string,
  smOffset: _propTypes["default"].string,
  mdOffset: _propTypes["default"].string,
  lgOffset: _propTypes["default"].string
});

_defineProperty(Col, "defaultProps", {
  className: '',
  xs: '12'
});