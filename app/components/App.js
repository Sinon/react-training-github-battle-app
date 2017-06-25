import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
var Popular = require('./Popular')
var Nav = require('./Nav')
var Home = require('./Home')
var Battle = require('./Battle')

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/popular' component={Popular} />
            <Route exact path='/battle' component={Battle} />
            <Route render={function () { return <p>Not Found</p> }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App
