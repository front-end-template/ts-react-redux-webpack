import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import queryString from 'query-string'

type HOCWrapped < PWrapped , PHoc > = React.ComponentClass<PWrapped & PHoc> | React.SFC<PWrapped & PHoc>

export interface IQueryStringProps {
  searchParams: any;
}

type IWithQueryStringProps = RouteComponentProps<any> & IQueryStringProps

/* eslint-disable max-len */
export function withQueryString<P> (Component: HOCWrapped<P, IWithQueryStringProps>) {
  function C (props: P & IWithQueryStringProps): JSX.Element {
    const {
      match,
      location,
      history,
      staticContext,
      ...rest
    } = props as any
    const params = queryString.parse(location.search)

    return (
      <Component searchParams={params} {...rest} />
    )
  }
  return withRouter(C) as any
}

export default withQueryString

