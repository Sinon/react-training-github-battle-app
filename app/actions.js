var api = require('./utils/api')

const SET_LANGUAGE_FILTER = 'SET_LANGUAGE_FILTER'
const ADD_PLAYER = 'ADD_PLAYER'
const REMOVE_PLAYER = 'REMOVE_PLAYER'
const UPDATE_REPOS = 'UPDATE_REPOS'

export const setLanguageFilter = lang => {
  return {
    type: SET_LANGUAGE_FILTER,
    filter: lang
  }
}

export const addPlayer = (playerNum, name, image) => {
  return {
    type: ADD_PLAYER,
    num: playerNum,
    name: name,
    img: image
  }
}

export const removePlayer = (playerNum) => {
  return {
    type: REMOVE_PLAYER,
    num: playerNum
  }
}

export const updateRepos = (repos) => {
  console.log('update repos')
  console.log(repos)
  return {
    type: UPDATE_REPOS,
    repos: repos
  }
}

export const updateReposAsync = (lang) => {
  console.log('update repos async')
  console.log(lang)
  return dispatch => {
    api.fetchPopularRepos(lang)
      .then(response => {
        return response
      })
  }
}
