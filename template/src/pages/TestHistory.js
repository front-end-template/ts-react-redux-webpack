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
const withQueryString_1 = require('../hocs/withQueryString')

const TestHistory = /** @class */ (function (_super) {
  __extends(TestHistory, _super)
  function TestHistory (props) {
    const _this = _super.call(this, props) || this
    _this.state = {
      name: 'xgs',
      age: 25,
    }
    return _this
  }
  TestHistory.prototype.render = function () {
    return (<div>
      {this.state.name} {this.state.age}, TestHistory!
      {this.props.searchParams.token}
      <react_router_dom_1.Link to="/login" href="/login">go to login</react_router_dom_1.Link>
            </div>)
  }
  return TestHistory
}(React.Component))
exports['default'] = withQueryString_1['default'](TestHistory)
