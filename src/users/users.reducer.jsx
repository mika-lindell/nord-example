// Define how actions change state here
import { 
  USER_ADD, 
  USER_REMOVE_BEGIN, 
  USER_REMOVE_CANCEL, 
  USER_REMOVE_COMPLETE, 
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

const createStateWithNewUser = function(current, changes, state, newState){
  const changedState = Object.assign({}, state, newState);
  const index = state.all.indexOf(current);
  const params = Object.assign({}, current, changes);
  changedState.all[index] = new User(params);
  return changedState;
}

export function users(state = initialState, action) {

  let index, newState, changes;

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

     /** USER_REMOVE_BEGIN **/
    case USER_REMOVE_BEGIN:
      newState = {
        editing: action.user
      };
      changes = {
        status: 'deleting'
      }
      return createStateWithNewUser(action.user, changes, state, newState);  

     /** USER_REMOVE_CANCEL **/
    case USER_REMOVE_CANCEL:
      newState = {
        editing: action.user
      };
      changes = {
        status: 'ready'
      }
      return createStateWithNewUser(action.user, changes, state, newState);  

     /** USER_REMOVE_COMPLETE **/
    case USER_REMOVE_COMPLETE:
      index = state.all.indexOf(action.user);
      return Object.assign({}, state, {
        all: state.all.filter((_, i) => i !== index),
        editing: action.user
      });  

     /** USER_EDIT_BEGIN **/
    case USER_EDIT_BEGIN:
      newState = {
        editing: action.user
      };
      changes = {
        status: 'editing'
      }
      return createStateWithNewUser(action.user, changes, state, newState);  

    /** USER_EDIT_COMPLETE **/
    case USER_EDIT_COMPLETE:
      newState = {
        editing: action.user
      };
      action.changes.status = 'ready';
      return createStateWithNewUser(action.current, action.changes, state, newState);

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