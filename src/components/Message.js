import React from 'react'
import PropTypes from 'prop-types'

class Message extends React.Component {
  render () {
    return <h1>{this.props.message}</h1>
  }
}

Message.propTypes = {
  message: PropTypes.string.isRequired
}

export default Message
