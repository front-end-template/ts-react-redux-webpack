import * as React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

interface Props {
  counter: boolean;
  increment: () => any;
}

const Login: React.SFC<Props> = (props: Props) => {
  const { counter, increment } = props
  return (
    <section className="main">
      { counter }
      <Button onClick={increment}>add</Button>
      <Link to="/" href="/">go sadfto aa/</Link>
    </section>
  )
}

export default Login
