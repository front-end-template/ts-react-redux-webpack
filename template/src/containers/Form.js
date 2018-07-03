'use strict'

exports.__esModule = true
const react_redux_1 = require('react-redux')
const react_router_dom_1 = require('react-router-dom')
const redux_1 = require('redux')
const Form_1 = require('components/Form')
const TodoActions = require('../actions/login')

const mapStateToProps = function (state) {
  return ({
    counter: state.counter,
  })
}
// const mapDispatchToProps = { ...TodoActions }
// const mapDispatchToProps = () => {
//   return { ...TodoActions }
// }
const mapDispatchToProps = function (dispatch) { return redux_1.bindActionCreators(TodoActions, dispatch) }
exports['default'] = react_router_dom_1.withRouter(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Form_1['default']))
// export default connect(mapStateToProps, mapDispatchToProps)(Form)
