import { combineReducers } from 'redux'
import repos from './repos'
import players from './players'
import languageFilter from './languageFilter'

const battleApp = combineReducers({
  repos,
  players,
  languageFilter
})

export default battleApp