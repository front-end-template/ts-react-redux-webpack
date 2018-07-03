'use strict'

exports.__esModule = true
const React = require('react')
const Loadable = require('react-loadable')
const delayLoadForLoadable_1 = require('lib/delayLoadForLoadable')
// const Loading = () => <div>Loading...</div>
function Loading (props) {
  if (props.error) {
    return <div>Error! </div>
  } else if (props.pastDelay) {
    return <div>Loading...</div>
  }
  return null
}
// const loaderLogin = () => import('../containers/TestWithHOCLogin')
const loaderLogin = function () { return Promise.resolve().then(() => require('../containers/Login')) }
// const loaderLogin = () => import('pages/Login')
exports.Login = Loadable({
  loader () { return delayLoadForLoadable_1['default'](3000)(loaderLogin) },
  loading: Loading,
})
exports.App = Loadable({
  loader () { return Promise.resolve().then(() => require('pages/App')) },
  loading: Loading,
})
