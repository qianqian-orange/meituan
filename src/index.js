import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Layout from './layout'
import './index.css'
import './sass/index.scss'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'))
