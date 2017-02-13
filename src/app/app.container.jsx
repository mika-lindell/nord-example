import  React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { USER_EDIT_BEGIN, USER_EDIT_COMPLETE } from '../users/users.actions.jsx';
import { usersFetch } from '../users/users.actions.jsx';
import UsersComponent from '../users/users.container.jsx';
import UserAddComponent from '../users/user.add.container.jsx';
import User from '../users/user.type.jsx';

// This is a container, a container is something that handles data flow and passes ito nto components
class App extends React.Component {

  componentDidMount(){
    this.props.dispatch(usersFetch());
  }

  render () {
    return (
      <main>
        <UserAddComponent />
        <UsersComponent 
          users={this.props.users}
        />
      </main>
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