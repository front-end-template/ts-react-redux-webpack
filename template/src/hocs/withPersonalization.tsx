import * as React from 'react'
import { connect } from 'react-redux'

export interface IWithPersonalizationProps {
    name: string;
}

type HOC < PWrapped , PHoc > = React.ComponentClass<PWrapped & PHoc> | React.SFC<PWrapped & PHoc>


export function withPersonalization<P, S> (Component: HOC<P, IWithPersonalizationProps>): React.ComponentClass<P> { // eslint-disable-line max-len
  const C: React.SFC<P & IWithPersonalizationProps> =
    (props: P & IWithPersonalizationProps) => {
      const { name, ...rest } = props as any
      return (
        <Component name={name} {...rest} />
      )
    }

  const mapStateToProps = (state: any, ownProps: P): IWithPersonalizationProps => ({
    name: state.user.name,
  })

  return connect(mapStateToProps)(C)
}

export default withPersonalization
