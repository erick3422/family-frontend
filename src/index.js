import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

const appJsx = (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(appJsx, document.getElementById('root'))
