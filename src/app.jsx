import React from 'react'
import Root from './pages'
import { Provider } from 'react-redux'
import store from './redux'
import './app.scss'
import "./api/interceptors"

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}

export default App
