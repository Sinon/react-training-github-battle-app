import { connect } from 'react-redux'
import { setLanguageFilter } from '../actions'
import LanguageItem from '../components/LanguageItem'

console.log(setLanguageFilter)
console.log(LanguageItem)

const mapStateToProps = state => {
  return {
    selectedLanguage: state.languageFilter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onItemClick: lang => {
      dispatch(setLanguageFilter(lang))
    }
  }
}
console.log(mapStateToProps)
console.log(mapDispatchToProps)

const VisibleLanguageFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageItem)

export default VisibleLanguageFilter
