'use strict'

const __assign = (this && this.__assign) || Object.assign || function (t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i]
    for (const p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p)) { t[p] = s[p] }
    }
  }
  return t
}
exports.__esModule = true
const login_1 = require('../actionTypes/login')

const initialState = {
  counter: 0,
  user: {
    name: 'xgs',
  },
}
function todos (state, action) {
  if (state === void 0) { state = initialState }
  switch (action.type) {
    case login_1.INCREMENT:
      return __assign({}, state, { counter: state.counter + 1 })
    default:
      return state
  }
}
exports['default'] = todos
