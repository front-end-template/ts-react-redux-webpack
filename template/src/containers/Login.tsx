import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Login from 'components/Login'
import * as TodoActions from '../actions/login'

const mapStateToProps = state => ({
  counter: state.counter,
})


// const mapDispatchToProps = { ...TodoActions }
// const mapDispatchToProps = () => {
//   return { ...TodoActions }
// }
const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)
