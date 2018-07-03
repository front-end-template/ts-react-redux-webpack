'use strict'

exports.__esModule = true
const react_redux_1 = require('react-redux')
const react_router_dom_1 = require('react-router-dom')
const redux_1 = require('redux')
const Login_1 = require('components/Login')
const loginActions = require('../actions/login')
const withPersonalization_1 = require('../hocs/withPersonalization')

const mapStateToProps = function (state) {
  return ({
    counter: state.counter,
  })
}
const mapDispatchToProps = function (dispatch) { return redux_1.bindActionCreators(loginActions, dispatch) }
/* eslint-disable max-len */
exports['default'] = withPersonalization_1['default'](react_router_dom_1.withRouter(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Login_1['default'])))
// export default connect(mapStateToProps, mapDispatchToProps)(Login)
