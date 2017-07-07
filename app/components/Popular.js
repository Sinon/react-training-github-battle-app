import React from 'react'
import SelectLanguage from './SelectLanguage'
import ReposShown from '../containers/ReposShown'
var api = require('../utils/api')
var Loading = require('./Loading')

class Popular extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      repos: null
    }
  }

  updateLanguage = (language) => {
    this.setState(function () {
      return {
        repos: null
      }
    })
    api.fetchPopularRepos(language)
      .then(response => {
        this.setState(() => {
          return {repos: response}
        })
      })
  }
  render () {
    return (
      <div>
        <SelectLanguage />
        {!this.state.repos
          ? <Loading />
          : <ReposShown />}
      </div>
    )
  }
}

module.exports = Popular
