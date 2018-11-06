import React from 'react'
import './App.css'
import Message from './components/Message'

class App extends React.Component {
  state = {
    people: []
  }

  async componentDidMount() {
    const responseRaw = await fetch('https://swapi.co/api/people/')
    const response = await responseRaw.json()
    this.setState({people: response.results})
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.people.map((p, index) => <Message key={index} index={index} message={p.name} />)
        }
      </React.Fragment>
    )
  }
}

export default App
