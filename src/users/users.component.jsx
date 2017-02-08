import React from 'react';

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
              <p key={user.id}>#{user.id}: {user.name}, {user.age}, {user.gender}</p>
          )}
        </div>
      );
    }else{
      return (<div></div>);
    }
    
  }

}

export default UsersComponent;