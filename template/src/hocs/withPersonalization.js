'use strict'

const __rest = (this && this.__rest) || function (s, e) {
  const t = {}
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) { t[p] = s[p] }
  }
  if (s != null && typeof Object.getOwnPropertySymbols === 'function') {
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0) { t[p[i]] = s[p[i]] }
    }
  }
  return t
}
exports.__esModule = true
const React = require('react')
const react_redux_1 = require('react-redux')

function withPersonalization (Component) {
  const C = function (props) {
    let _a = props,
      name = _a.name,
      rest = __rest(_a, ['name'])
    return (<Component name={name} {...rest} />)
  }
  const mapStateToProps = function (state, ownProps) {
    return ({
      name: state.user.name,
    })
  }
  return react_redux_1.connect(mapStateToProps)(C)
}
exports.withPersonalization = withPersonalization
exports['default'] = withPersonalization
