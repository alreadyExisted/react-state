import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Scenes } from './scenes'
import './theme/index.css'

ReactDOM.render(
  <BrowserRouter>
    <Scenes />
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
