const SET_LANGUAGE_FILTER = 'SET_LANGUAGE_FILTER'
const ADD_PLAYER = 'ADD_PLAYER'
const REMOVE_PLAYER = 'REMOVE_PLAYER'
const ADD_REPO = 'ADD_REPO'
const REMOVE_REPO = 'REMOVE_REPO'

function setLanguageFilter(lang) {
  return {
    type: SET_LANGUAGE_FILTER,
    filter: lang
  }
}

function addPlayer(playerNum, name, image) {
  return {
    type: ADD_PLAYER,
    num: playerNum,
    name: name,
    img: image
  }
}

function removePlayer(playerNum) {
  return {
    type: REMOVE_PLAYER,
    num: playerNum
  }
}

// TODO Fix
function addRepo() {
  return {
    type: ADD_REPO
  }
}

// TODO Fix
function removeRepo() {
  return {
    type: REMOVE_REPO
  }
}
