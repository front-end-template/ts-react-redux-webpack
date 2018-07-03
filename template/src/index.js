import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Route from './routes/index.tsx'
import { configureDevStore, configureProdStore } from './store/configureStore.ts'

if (module.hot) {
  module.hot.accept()
}

let store
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
if (process.env.NODE_ENV === 'production') {
  store = configureProdStore()
} else {
  store = configureDevStore()
}

ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById('app'),
)
