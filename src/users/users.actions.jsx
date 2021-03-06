// Define available actions and how they are dispatched here

import fetch from 'isomorphic-fetch';
import User from '../user/user.type.jsx';
import SortOrder from './sort_order.type.jsx';

export const USER_SET_STATUS = 'USER_SET_STATUS';
export function userSetStatus(user, status){
  return{
    type: USER_SET_STATUS,
    user: user,
    status: status 
  }
}

export const USER_ADD = 'USER_ADD';
export function userAdd(user){
  return{
    type: USER_ADD,
    user: user 
  }
}

export const USER_REMOVE_BEGIN = 'USER_REMOVE_BEGIN';
export function userRemoveBegin(user){
  return{
    type: USER_REMOVE_BEGIN,
    user: user
  }
}

export const USER_REMOVE_CANCEL = 'USER_REMOVE_CANCEL';
export function userRemoveCancel(user){
  return{
    type: USER_REMOVE_CANCEL,
    user: user
  }
}

export const USER_REMOVE_COMPLETE = 'USER_REMOVE_COMPLETE';
export function userRemoveComplete(user){
  return{
    type: USER_REMOVE_COMPLETE,
    user: user
  }
}

export const USER_EDIT_BEGIN = 'USER_EDIT_BEGIN';
export function userEditBegin(user){
  return{
    type: USER_EDIT_BEGIN,
    user: user
  }
}

export const USER_EDIT_COMPLETE = 'USER_EDIT_COMPLETE';
export function userEditComplete(current, changes){
  return{
    type: USER_EDIT_COMPLETE,
    current: current,
    changes: changes
  }
}

export const USERS_SET_SORTING = 'USERS_SET_SORTING'
export function usersSetSorting(key, asc){
  return{
    type: USERS_SET_SORTING,
    sort: new SortOrder({ 
      key: key,
      asc: asc
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


export function usersSort(key, asc){
  return function (dispatch){
    dispatch(usersSetSorting(key, asc));
    dispatch(usersFetch());
  }
}

// Example of async fetch
// Modified from http://redux.js.org/docs/advanced/AsyncActions.html
export function usersFetch() {

  return function (dispatch, getState) {

    const state = getState();
    const api = `./public/json/users_${state.users.sort.key}_${state.users.sort.asc ? 'asc' : 'desc'}.json`;

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