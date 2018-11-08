// @flow
import React from 'react'
import type {MessageProps} from './Message.types'

class Message extends React.Component<MessageProps, void> {
  render () {
    return <h1>{this.props.message}</h1>
  }
}

export default Message
