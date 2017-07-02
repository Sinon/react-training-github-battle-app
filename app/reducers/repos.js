const repos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_REPO':
      return [
        ...state,
        {
          id: action.id,
          username: action.username,
        }
      ]
    case 'REMOVE_REPO':
      return state
    default:
      return state
  }
}

export default repos