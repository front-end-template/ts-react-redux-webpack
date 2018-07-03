'use strict'

exports.__esModule = true
const React = require('react')
const antd_1 = require('antd')

const Form = function (props) {
  let counter = props.counter,
    increment = props.increment
  return (<section className="main">
    {counter}
    <antd_1.Button onClick={increment}>add</antd_1.Button>
    {props.location.search}
    <antd_1.Button onClick={function () { return props.history.push('/') }}>go to /</antd_1.Button>
  </section>)
}
exports['default'] = Form
