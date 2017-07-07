import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import battleApp from './reducers'
import App from './components/App'
import gitHubService from './github-service'
require('./index.css')

let store = createStore(battleApp, {}, applyMiddleware(gitHubService))
console.log(JSON.stringify(store.getState()))
console.log(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
