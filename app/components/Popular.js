import React from 'react'
import PropTypes from 'prop-types'
var api = require('../utils/api')
var Loading = require('./Loading')

const SelectLanguage = ({selectedLanguage, onSelect}) => {
  let languages = ['All', 'Python', 'Javascript', 'Ruby', 'CSS', 'Java']
  return (
    <ul className='languages'>
      {languages.map((l) => {
        let liStyle = selectedLanguage === l ? {color: '#d0021b'} : null
        return (
          <li
            style={liStyle}
            onClick={onSelect.bind(null, l)}
            key={l}>
            {l}
          </li>
        )
      })}
    </ul>
  )
}

const ReposGrid = ({repos}) => (
  <ul className='popular-list'>
    {repos.map(function (repo, index) {
      return (
        <li key={repo.name} className='popular-item'>
          <div className='popular-rank'>#{index + 1}</div>
          <ul className='space-list-items'>
            <li>
              <img
                className='avatar'
                src={repo.owner.avatar_url}
                alt={repo.owner.login} />
            </li>
            <li><a href={repo.html_url}>{repo.name}</a></li>
            <li>@{repo.owner.login}</li>
            <li>{repo.stargazers_count} stars</li>
          </ul>
        </li>
      )
    })}
  </ul>
)

ReposGrid.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      owner: PropTypes.object.isRequired,
      stargazers_count: PropTypes.number.isRequired
    }).isRequired)
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedLanguage: 'All',
      repos: null
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }

  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage (language) {
    this.setState(function () {
      return {
        selectedLanguage: language,
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
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
        {!this.state.repos
          ? <Loading />
          : <ReposGrid repos={this.state.repos} />}
      </div>
    )
  }
}

module.exports = Popular
