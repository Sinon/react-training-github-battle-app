import React from 'react'
import PropTypes from 'prop-types'

class PlayerInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'username': ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  render () {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='username'>{this.props.label}</label>
        <input id='username' placeholder='Github username' type='text'
          autoComplete='off' value={this.state.username} onChange={this.handleChange} />
        <button className='button' type='submit' disabled={!this.state.username}>Submit</button>
      </form>
    )
  }
  handleSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }
  handleChange (event) {
    let value = event.target.value
    this.setState(() => {
      let newState = {'username': value}
      return newState
    })
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

class Battle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      playerOneName: '',
      playerOneImage: null,
      playerTwoName: '',
      playerTwoImage: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (id, username) {
    this.setState(() => {
      let newState = {}
      newState[id + 'Name'] = username
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
      return newState
    })
  }

  render () {
    let playOneName = this.state.playerOneName
    let playTwoName = this.state.playerTwoName
    return (
      <div>
        <div className='row'>
          {!playOneName && <PlayerInput id='playerOne' label='Player One' onSubmit={this.handleSubmit} />}
          {!playTwoName && <PlayerInput id='playerTwo' label='Player Two' onSubmit={this.handleSubmit} />}
        </div>
      </div>
    )
  }
}

module.exports = Battle
