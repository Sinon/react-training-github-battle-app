import React from 'react'
import PropTypes from 'prop-types'

const LanguageItem = ({lang, selectedLanguage, onItemClick}) => (
  <li
    style={selectedLanguage === lang ? {color: '#d0021b'} : null}
    onClick={() => onItemClick(lang)}>
    {lang}
  </li>
)

// LanguageItem.propTypes = {
//   lang: PropTypes.string.isRequired,
//   selectedLanguage: PropTypes.string.isRequired,
//   onSelect: PropTypes.func.isRequired
// }

console.log('EXPORT')
console.log(LanguageItem)
export default LanguageItem
