'use strict'

exports.__esModule = true
const redux_1 = require('redux')
const todos_1 = require('./todos')

const reducers = redux_1.combineReducers({ todos: todos_1['default'] })
exports['default'] = reducers
