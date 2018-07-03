'use strict'

exports.__esModule = true
const types = require('../actionTypes/login')

exports.increment = function () { return ({ type: types.INCREMENT }) }
exports.deleteTodo = function (id) { return ({ type: types.DELETE_TODO, id }) }
exports.editTodo = function (id, text) { return ({ type: types.EDIT_TODO, id, text }) }
exports.completeTodo = function (id) { return ({ type: types.COMPLETE_TODO, id }) }
exports.completeAllTodos = function () { return ({ type: types.COMPLETE_ALL_TODOS }) }
exports.clearCompleted = function () { return ({ type: types.CLEAR_COMPLETED }) }
exports.setVisibilityFilter = function (filter) { return ({ type: types.SET_VISIBILITY_FILTER, filter }) }
