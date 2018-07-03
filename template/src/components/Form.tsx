import * as React from 'react'
import { Button } from 'antd'
import { RouteComponentProps } from 'react-router-dom'

interface IOwnProps {
  counter: boolean;
  increment: () => any;
}

type Props = IOwnProps & RouteComponentProps<any>

const Form: React.SFC<Props> =
  (props: Props) => {
    const { counter, increment } = props
    return (
      <section className="main">
        { counter }
        <Button onClick={increment}>add</Button>
        { props.location.search }
        <Button onClick={() => props.history.push('/')}>go to /</Button>
      </section>
    )
  }

export default Form
