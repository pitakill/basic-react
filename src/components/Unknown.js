// @flow
import * as React from 'react'
import type {UnknownProps} from './Unknown.types'

const Unknown = ({propiedad, index}: UnknownProps): React.Element<"h2"> => <h2>{propiedad}</h2>

export default Unknown
