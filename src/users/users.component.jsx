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
          <table>
            <tbody>
              <tr>
                <th
                  onClick={()=>this.props.sort('id')}
                >
                  ID
                </th>
                <th
                  onClick={()=>this.props.sort('name')}
                >
                  Name
                </th>
                <th
                  onClick={()=>this.props.sort('age')}
                >
                  Age
                </th>
                <th
                  onClick={()=>this.props.sort('gender')}
                >
                  Gender
                </th>
                <th>
                </th>
              </tr>
              {this.props.users.users.map((user) => 
                <UserComponent 
                  key={user.id} 
                  user={user} 
                  remove={this.props.remove} 
                />
              )}
            </tbody>
        </table>
      </div>
      );
    }else{
      return (<div>Loading...</div>);
    }
    
  }

}

export default UsersComponent;