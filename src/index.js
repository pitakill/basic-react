// @flow
import React from 'react'
import {render} from 'react-dom'
import './index.css'
import App from './App'

const root = document.getElementById('root')

if (root instanceof HTMLElement) {
  render(<App />, root)
}
