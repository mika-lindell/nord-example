import React from 'react';

class UserComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const user = this.props.user;

    return(
      <tr>
        <td>
          #{user.id}
        </td>
        <td>
          {user.name}
        </td>
        <td>
          {user.age}
        </td>
        <td>
          {user.gender}
        </td>
        <td>
          <button 
            onClick={()=>this.props.remove(user)}
          >
            rem
          </button>
        </td>
      </tr>
    );

  }

}

export default UserComponent;

