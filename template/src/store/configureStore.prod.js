'use strict'

exports.__esModule = true
const redux_1 = require('redux')
const redux_thunk_1 = require('redux-thunk')
const reducers_1 = require('../reducers')

const configureProdStore = function (preloadedState) { return redux_1.createStore(reducers_1['default'], preloadedState, redux_1.applyMiddleware(redux_thunk_1['default'])) }
exports['default'] = configureProdStore
