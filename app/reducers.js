import { combineReducers } from 'redux'

const languageFilter = (state = 'Default', action) => {
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

// TODO Fix
const repos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_REPO':
      return [
        ...state,
        {
          id: action.id,
          username: action.username
        }
      ]
    case 'REMOVE_REPO':
      return state.filter(item => action.name !== item.name)
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
