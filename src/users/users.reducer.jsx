
import { USERS_SUCCESS } from '../users/users.actions.jsx';

export function users(state = {}, action) {

  switch (action.type) {
    
    case USERS_SUCCESS:
      // console.log('reducer', action.users);
      return Object.assign({}, state, {
        users: action.users
      })    
      
    default:
      
      return state
  }
}

export default users;