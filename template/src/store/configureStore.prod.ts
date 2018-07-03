import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const configureProdStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk),
)

export default configureProdStore
