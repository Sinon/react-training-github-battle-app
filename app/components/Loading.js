import React from 'react'
import PropTypes from 'prop-types'

var styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
}

class Loading extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: props.text
    }
  }
  componentDidMount () {
    let stopper = this.props.text + '...'
    let newText
    this.interval = window.setInterval(() => {
      this.setState((prevState) => {
        if (this.state.text === stopper) {
          newText = this.props.text
        } else {
          newText = prevState.text + '.'
        }
        return {text: newText}
      })
    }, this.props.speed)
  }
  componentWillMount () {
    window.clearInterval(this.interval)
  }
  render () {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    )
  }
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

module.exports = Loading
