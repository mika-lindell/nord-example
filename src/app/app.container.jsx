import  React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

import { usersFetch, userAdd } from '../users/users.actions.jsx';
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
        <button onClick={()=>this.handleClick()}>Add</button>
        <UsersComponent users={this.props.users} />
      </div>
    );
  }

  handleClick () {
    console.log('here');
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