// Define available actions and how they are dispatched here

import fetch from 'isomorphic-fetch';
import User from './user.type.jsx';
import SortOrder from './sort_order.type.jsx';


export const USER_ADD = 'USER_ADD';
export function userAdd(user){
  return{
    type: USER_ADD,
    user: user 
  }
}

export const USER_REMOVE = 'USER_REMOVE';
export function userRemove(user){
  return{
    type: USER_REMOVE,
    user: user
  }
}


export const USERS_SET_SORTING = 'USERS_SET_SORTING'
export function usersSetSorting(key, direction){
  return{
    type: USERS_SET_SORTING,
    sort: new SortOrder({ 
      key: key,
      direction: direction
    })
  }
}

export const USERS_REQUEST = 'USERS_REQUEST'
function usersRequest(){
  return{
    type: USERS_REQUEST
  }
}

export const USERS_SUCCESS = 'USERS_SUCCESS'
function usersSuccess(json){
  return {
    type: USERS_SUCCESS,
    users: json.data.map(value => new User(value)),
    receivedAt: Date.now()
  }
}

export const USERS_FAILURE = 'USERS_FAILURE'
function usersFailure(){
  return {
    type: USERS_FAILURE,
    receivedAt: Date.now()
  }
}


export function usersSort(key, direction){
  return function (dispatch){
    dispatch(usersSetSorting(key, direction));
    dispatch(usersFetch());
  }
}

// Example of async fetch
// Modified from http://redux.js.org/docs/advanced/AsyncActions.html
export function usersFetch() {

  return function (dispatch, getState) {

    const state = getState();
    const api = `./public/json/users_${state.users.sort.key}_${state.users.sort.direction}.json`;

    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(usersRequest())

    return fetch(api)
      .then((response) => {
        // catch any error in the network call.
        if (response.status >= 400) {
            return null;
        }else{
          return response.json();
        }
      })
      .then((json) =>{ 
        // Update the app state with the results of the API call.
        if(json) 
          dispatch(usersSuccess(json));
        else
          dispatch(usersFailure());
      }) 
  }
}

export default usersFetch;