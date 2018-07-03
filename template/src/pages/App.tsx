import * as React from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'

type State = {
  name?: string;
  age?: number;
  value?: string;
}

export default class App extends React.Component<RouteComponentProps<any>, State> {
  constructor (props) {
    super(props)
    this.state = {
      name: 'xgs',
      age: 25,
    }
  }

  render () {
    return (
      <div>
        { this.state.name } { this.state.age }, App!
        <Link to="/login" href="/login">go to login</Link>
      </div>
    )
  }
}
