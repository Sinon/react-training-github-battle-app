const players = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        {
          id: action.id,
          username: action.username,
        }
      ]
    case 'REMOVE_PLAYER':
      return state
    default:
      return state
  }
}

export default players