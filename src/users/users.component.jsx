import React from 'react';
import UserComponent from './user.component.jsx';

class UsersComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(typeof this.props.users.users !== 'undefined'){
      return (
        <div>
          <h1>Users</h1>
          {this.props.users.users.map((user) => 
            <UserComponent key={user.id} user={user} remove={this.props.remove} />
          )}
        </div>
      );
    }else{
      return (<div>Loading...</div>);
    }
    
  }

}

export default UsersComponent;