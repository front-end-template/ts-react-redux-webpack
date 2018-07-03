
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/todos'

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const useTools = !!(window as any).__REDUX_DEVTOOLS_EXTENSION__
const configureDevStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(
        thunk,
        createLogger(),
      ),
      useTools && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureDevStore
