'use strict'

exports.__esModule = true
const React = require('react')
const react_router_dom_1 = require('react-router-dom')
const _404_1 = require('pages/404')
const dynamic_component_1 = require('./dynamic-component')
// import DevTools from '../containers/DevTools'
const routes = function () {
  return (<react_router_dom_1.BrowserRouter>
    <div>
      <react_router_dom_1.Switch>
        <react_router_dom_1.Route path="/" exact component={dynamic_component_1.App} />
        <react_router_dom_1.Route path="/login" component={dynamic_component_1.Login} />
        <react_router_dom_1.Route component={_404_1['default']} />
      </react_router_dom_1.Switch>

    </div>
          </react_router_dom_1.BrowserRouter>)
}
exports['default'] = routes
