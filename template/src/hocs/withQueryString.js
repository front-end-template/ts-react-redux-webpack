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
const react_router_dom_1 = require('react-router-dom')
const query_string_1 = require('query-string')
/* eslint-disable max-len */
function withQueryString (Component) {
  function C (props) {
    let _a = props,
      match = _a.match,
      location = _a.location,
      history = _a.history,
      staticContext = _a.staticContext,
      rest = __rest(_a, ['match', 'location', 'history', 'staticContext'])
    const params = query_string_1['default'].parse(location.search)
    return (<Component searchParams={params} {...rest} />)
  }
  return react_router_dom_1.withRouter(C)
}
exports.withQueryString = withQueryString
exports['default'] = withQueryString
