'use strict'

exports.__esModule = true
const redux_1 = require('redux')
const redux_thunk_1 = require('redux-thunk')
const redux_logger_1 = require('redux-logger')
const todos_1 = require('../reducers/todos')
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const useTools = !!window.__REDUX_DEVTOOLS_EXTENSION__
const configureDevStore = function (preloadedState) {
  const store = redux_1.createStore(todos_1['default'], preloadedState, redux_1.compose(redux_1.applyMiddleware(redux_thunk_1['default'], redux_logger_1.createLogger()), useTools && window.__REDUX_DEVTOOLS_EXTENSION__()))
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(todos_1['default'])
    })
  }
  return store
}
exports['default'] = configureDevStore
