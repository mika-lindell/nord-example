import React from 'react';

class UserComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const user = this.props.user;

    return(
      <p>#{user.id}: {user.name}, {user.age}, {user.gender}</p>
    );
    
  }

}

export default UserComponent;

