import  React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

import { fetchUsers } from '../users/users.actions.jsx';

import UsersComponent from '../users/users.component.jsx';

// This is a container, a container is something that has subscribed to redux and handles the flow of information
class App extends React.Component {

  componentDidMount(){
    this.props.dispatch(fetchUsers());
  }

  render () {
    return (
      <div>
        <UsersComponent users={this.props.users} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers())
    }
  }
}

App.propTypes = {
  users: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(App)