// @flow
import * as React from 'react'
import './App.css'
import type {AppState} from './App.types'
import Message from './components/Message'
import Unknown from './components/Unknown'

class App extends React.Component<{}, AppState> {
  state = {
    people: [],
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
          this.state.people.map((p, index) => (
            <React.Fragment key={`fragment-${index}`}>
              <Message key={`message-${index}`} message={p.name} />
              <Unknown key={`unknown-${index}`} index={{name: "hola"}} propiedad={p.mass ? p.mass : "adios"} />
            </React.Fragment>
          ))
        }
      </>
    )
  }
}

export default App
