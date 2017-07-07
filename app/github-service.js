var api = require('./utils/api')

const gitHubService = store => next => action => {
  /*
  Pass all actions through by default
  */
  next(action)
  switch (action.type) {
    case 'UPDATE_REPOS':
      api.fetchPopularRepos(action.lang)
           .then(response => {
             next({type: 'GET_REPOS_DATA_RECEIVED', response})
           })
           .catch(err => {
             next({type: 'GET_REPOS_ERROR', err})
           })
      break
    default:
      break
  }
}

export default gitHubService
