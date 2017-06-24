var React = require('react')
var PropTypes = require('prop-types')

function SelectLanguage (props) {
  let languages = ['All', 'Python', 'Javascript', 'Ruby', 'CSS', 'Java']
  return (
    <ul className='languages'>
      {languages.map((l) => {
        let liStyle = props.selectedLanguage === l ? {color: '#d0021b'} : null
        return (
          <li
            style={liStyle}
            onClick={props.onSelect.bind(null, l)}
            key={l}>
            {l}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedLanguage: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }
  updateLanguage (language) {
    this.setState(function () {
      return {
        selectedLanguage: language
      }
    })
  }
  render () {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
      </div>
    )
  }
}

module.exports = Popular
