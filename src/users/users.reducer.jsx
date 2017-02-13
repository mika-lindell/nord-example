// Define how actions change state here
import { 
  USER_ADD, 
  USER_REMOVE, 
  USER_EDIT_BEGIN, 
  USER_EDIT_COMPLETE, 
  USERS_SET_SORTING, 
  USERS_SUCCESS 
} from './users.actions.jsx';

import User from '../user/user.type.jsx';
import SortOrder from './sort_order.type.jsx';

const initialState = {
  all: new Array(),
  sort: new SortOrder(),
  editing: {
    inProgress: false,
    user: null
  }
};

export function users(state = initialState, action) {

  let index, params, newState;

  switch (action.type) {
    
    /** USER_ADD **/
    case USER_ADD:
      const maxId = Math.max.apply(
        Math, 
        state.all.map(user => user.id)
      );
      action.user.id = maxId + 1;
      return Object.assign({}, state, {
        all: [
          new User(action.user),
          ...state.all
        ] 
      })  

     /** USER_REMOVE **/
    case USER_REMOVE:
      index = state.all.indexOf(action.user);
      return Object.assign({}, state, {
        all: state.all.filter((_, i) => i !== index)
      });  

     /** USER_EDIT_BEGIN **/
    case USER_EDIT_BEGIN:
      return Object.assign({}, state, {
        editing: {
          inProgress: true,
          user: action.user
        }
      });  

    /** USER_EDIT_COMPLETE **/
    case USER_EDIT_COMPLETE:
      index = state.all.indexOf(action.current);
      newState = Object.assign({}, state, {
        editing: {
          inProgress: false,
          user: null
        }
      });
      params = Object.assign({}, action.current, action.changes);
      newState.all[index] = new User(params);
      return newState;

    /** USERS_SET_SORTING **/
    case USERS_SET_SORTING:
      return Object.assign({}, state, {
        sort: new SortOrder(action.sort)
      });  

    /** USERS_SUCCESS **/
    case USERS_SUCCESS:
      return Object.assign({}, state, {
        all: action.users
      });    
      
    /** DEFAULT **/
    default:
      return state
  }
}

export default users;