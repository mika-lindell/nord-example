// Define how actions change state here
import { USERS_SUCCESS, USER_ADD, USER_REMOVE } from './users.actions.jsx';
import User from './user.type.jsx';

export function users(state = {}, action) {

  switch (action.type) {
    
    case USER_ADD:
      const nextId = state.users.length + 1;

      action.user.id = nextId

      return Object.assign({}, state, {
        users: [
          action.user,
          ...state.users
        ] 
      })  

    case USERS_SUCCESS:

      return Object.assign({}, state, {
        users: action.users
      })    
      
    default:
      
      return state
  }
}

export default users;