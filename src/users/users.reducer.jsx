// Define how actions change state here
import { USER_ADD, USER_REMOVE, USERS_SET_SORTING, USERS_SUCCESS } from './users.actions.jsx';
import User from './user.type.jsx';
import SortOrder from './sort_order.type.jsx';

const initialState = {
  users: new Array(),
  sort: new SortOrder()
};

export function users(state = initialState, action) {

  switch (action.type) {
    
    case USER_ADD:

      const maxId = Math.max.apply(
        Math, 
        state.users.map(user => user.id)
      );

      action.user.id = maxId + 1;

      return Object.assign({}, state, {
        users: [
          new User(action.user),
          ...state.users
        ] 
      })  

    case USER_REMOVE:

      const index = state.users.indexOf(action.user);

      return Object.assign({}, state, {
        users: state.users.filter((_, i) => i !== index)
      });  

    case USERS_SET_SORTING:
      return Object.assign({}, state, {
        sort: new SortOrder(action.sort)
      });  

    case USERS_SUCCESS:
      return Object.assign({}, state, {
        users: action.users
      });    
      
    default:
      
      return state
  }
}

export default users;