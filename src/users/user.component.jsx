import React from 'react';

class UserComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const user = this.props.user;

    return(
      <p>#{user.id}: {user.name}, {user.age}, {user.gender}<button onClick={()=>this.props.remove(user)}>rem</button></p>
    );

  }

}

export default UserComponent;

