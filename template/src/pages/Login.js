'use strict'

const __extends = (this && this.__extends) || (function () {
  const extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b }) ||
        function (d, b) { for (const p in b) if (b.hasOwnProperty(p)) d[p] = b[p] }
  return function (d, b) {
    extendStatics(d, b)
    function __ () { this.constructor = d }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __())
  }
}())
exports.__esModule = true
const React = require('react')
const react_router_dom_1 = require('react-router-dom')
/* eslint-disable react/no-multi-comp */
const Login = /** @class */ (function (_super) {
  __extends(Login, _super)
  function Login (props) {
    const _this = _super.call(this, props) || this
    _this.state = {
      name: 'xgs',
    }
    return _this
  }
  Login.prototype.render = function () {
    return (<div>
      {this.state.name}, Login!
      <react_router_dom_1.Link to="/" href="/">go to /</react_router_dom_1.Link>
            </div>)
  }
  return Login
}(React.Component))
exports['default'] = Login
