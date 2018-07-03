import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Page404 from 'pages/404'
import { App, Login } from './dynamic-component'
// import DevTools from '../containers/DevTools'

const routes = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
        <Route component={Page404} />
      </Switch>
      {/* <DevTools /> */}
    </div>
  </Router>
)

export default routes
