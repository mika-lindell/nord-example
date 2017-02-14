import { combineReducers } from 'redux'
import { users } from './users/users.reducer.jsx'

const rootReducer = combineReducers({
  users
})

export default rootReducer
