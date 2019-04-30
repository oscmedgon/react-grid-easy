"use strict";

require("babel-polyfill");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import App from './App';
(0, _reactDom.render)(_react["default"].createElement(App, null), document.getElementById('root'));

var App = function App() {
  return _react["default"].createElement("h1", null, "Hola que ase");
};