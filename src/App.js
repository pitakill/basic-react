// @flow
import * as React from 'react'
import './App.css'
import type {AppState} from './App.types'
import Message from './components/Message'

class App extends React.Component<{}, AppState> {
  state = {
    people: []
  }

  async componentDidMount(): Promise<any> {
    const responseRaw = await fetch('https://swapi.co/api/people/')
    const response = await responseRaw.json()
    this.setState({people: response.results})
  }

  render(): React.Element<typeof React.Fragment> {
    return (
      <>
        {
          this.state.people.map((p, index) => <Message key={index} index={index} message={p.name} />)
        }
      </>
    )
  }
}

export default App
