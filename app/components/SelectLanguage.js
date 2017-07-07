import React from 'react'
import PropTypes from 'prop-types'
import VisibleLanguageFilter from '../containers/SelectedLanguage'

const SelectLanguage = () => {
  let languages = ['All', 'Python', 'Javascript', 'Ruby', 'CSS', 'Java']
  return (
    <ul className='languages'>
      {languages.map((l) => {
        return <VisibleLanguageFilter lang={l} key={l} />
      })}
    </ul>
  )
}

// SelectLanguage.propTypes = {
//   selectedLanguage: PropTypes.string.isRequired,
//   onSelect: PropTypes.func.isRequired
// }

export default SelectLanguage
