'use strict'

exports.__esModule = true
const React = require('react')

function Page404 (props) {
  return (<div>
      404 Not Found!{props.location.state && ''}
          </div>)
}
exports['default'] = Page404
