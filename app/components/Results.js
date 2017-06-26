import React from 'react'
import queryString from 'query-string'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
var api = require('../utils/api')
var PlayerPreview = require('./PlayerPreview')

function Profile (props) {
  let info = props.info
  return (
    <PlayerPreview avatar={info.avatar_url} username={info.login}>
      <ul className='space-list-items'>
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}
        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>
        {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
      </ul>
    </PlayerPreview>
  )
}

Profile.propTypes = {
  info: PropTypes.object.isRequired
}

function Player (props) {
  return (
    <div>
      <h1 className='header'>{props.label}</h1>
      <h3 style={{textAlign: 'center'}}>Score: {props.score}</h3>
      <Profile info={props.profile} />
    </div>
  )
}

Player.propTypes = {
  profile: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
}

class Results extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }

  componentDidMount () {
    let players = queryString.parse(this.props.location.search)
    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then((result) => {
      if (result === null) {
        return this.setState(() => {
          return {error: 'Something went wrong check username', loading: false}
        })
      }

      this.setState(() => {
        return {
          winner: result[0],
          loser: result[1],
          loading: false,
          error: null
        }
      })
    })
  }

  render () {
    let error = this.state.error
    let winner = this.state.winner
    let loser = this.state.loser
    let loading = this.state.loading

    if (loading) {
      return <p>Loading</p>
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to='/battle'>Reset</ Link>
        </div>
      )
    }

    return (
      <div className='row'>
        <Player label='Winner' score={winner.score} profile={winner.profile} />
        <Player label='Loser' score={loser.score} profile={loser.profile} />
      </div>
    )
  }
}

module.exports = Results
