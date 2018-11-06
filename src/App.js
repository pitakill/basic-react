import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log("Me construí", props)
  }

  componentDidMount() {
    console.log("Me monté")
  }

  componentWillMount() {
    console.log("Me montaré")
  }

  render() {
    console.log("Me pinté")
    return (
      <h1 className="App">{this.props.message}</h1>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired
}

export default App
