import  React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

import { usersFetch, userAdd, userRemove } from '../users/users.actions.jsx';
import UsersComponent from '../users/users.component.jsx';
import User from '../users/user.type.jsx';

// This is a container, a container is something that handles data flow and passes ito nto components
class App extends React.Component {

  componentDidMount(){
    this.props.dispatch(usersFetch());
  }

  render () {
    return (
      <div>
        <button onClick={()=>this.addUser()}>Add</button>
        <UsersComponent users={this.props.users} remove={(user)=>this.removeUser(user)} />
      </div>
    );
  }

  addUser(user){
    this.props.dispatch(
      userAdd(
        new User({
          name: 'Foo, Bar',
          age: 24,
          gender: 'male'
        })
      )
    );
  }

  removeUser(user){
    this.props.dispatch(
      userRemove(user)
    );
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUsers: () => {
//       dispatch(usersFetch())
//     }
//   }
// }

App.propTypes = {
  users: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(App)