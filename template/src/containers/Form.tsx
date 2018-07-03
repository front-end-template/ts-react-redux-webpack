import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import Form from 'components/Form'
import * as TodoActions from '../actions/login'

const mapStateToProps = state => ({
  counter: state.counter,
})

// const mapDispatchToProps = { ...TodoActions }
// const mapDispatchToProps = () => {
//   return { ...TodoActions }
// }
const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form))
// export default connect(mapStateToProps, mapDispatchToProps)(Form)

