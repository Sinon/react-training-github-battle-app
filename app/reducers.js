import { combineReducers } from 'redux'

const languageFilter = (state = 'All', action) => {
  console.log(state, action)
  switch (action.type) {
    case 'SET_LANGUAGE_FILTER':
      return action.filter
    default:
      return state
  }
}

const players = (state = {}, action) => {
  let updatedPlayer = {}
  switch (action.type) {
    case 'ADD_PLAYER':
      updatedPlayer['player' + action.num] = {'name': action.name, 'img': action.image}
      return {...state, updatedPlayer}
    case 'REMOVE_PLAYER':
      updatedPlayer['player' + action.num] = {'name': '', 'img': ''}
      return state
    default:
      return state
  }
}

const repos = (state = [], action) => {
  console.log('reducer repo')
  console.log(state)
  console.log(action)
  switch (action.type) {
    case 'GET_REPOS_DATA_RECEIVED':
      return action
    default:
      return state
  }
}

const battleApp = combineReducers({
  repos,
  players,
  languageFilter
})

export default battleApp
