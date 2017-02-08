import fetch from 'isomorphic-fetch'

export const USERS_REQUEST = 'USERS_REQUEST'
function requestUsers(){
  return{
    type: USERS_REQUEST
  }
}

export const USERS_SUCCESS = 'USERS_SUCCESS'

function receiveUsers(json){
  return {
    type: USERS_SUCCESS,
    users: json.data.map(user => user),
    receivedAt: Date.now()
  }
}

export const USERS_FAILURE = 'USERS_FAILURE'
function failUsers(){
  return {
    type: USERS_FAILURE,
    receivedAt: Date.now()
  }
}
// Modified from http://redux.js.org/docs/advanced/AsyncActions.html
// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))

export function fetchUsers() {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestUsers())

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch('./public/json/users.json')
      .then((response) => {
        if (response.status >= 400) {
            return null;
        }else{
          return response.json();
        }
      })
      .then((json) =>{ 
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
        if(json) 
          dispatch(receiveUsers(json));
        else
          dispatch(failUsers());
      })

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}

export default fetchUsers;