import  React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

import { usersSort, usersFetch, userAdd, userRemove } from '../users/users.actions.jsx';
import UsersComponent from '../users/users.component.jsx';
import UserAddComponent from '../users/user.add.component.jsx';
import User from '../users/user.type.jsx';

// This is a container, a container is something that handles data flow and passes ito nto components
class App extends React.Component {

  componentDidMount(){
    this.props.dispatch(usersFetch());
  }

  render () {
    return (
      <main>
        <UserAddComponent 
          add={(user)=>this.addUser(user)} 
        />
        <UsersComponent 
          users={this.props.users} 
          sort={(key, direction)=>this.sortUsers(key, direction)}
          remove={(user)=>this.removeUser(user)} 
        />
      </main>
    );
  }

  addUser(user){
    this.props.dispatch(
      userAdd(user)
    );
  }

  removeUser(user){
    this.props.dispatch(
      userRemove(user)
    );
  }

  sortUsers(key){

    const asc = this.props.users.sort.key === key ? !this.props.users.sort.asc : this.props.users.sort.asc;


    this.props.dispatch(
      usersSort(key, asc)
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