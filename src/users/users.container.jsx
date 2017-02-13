import React from 'react';
import { connect } from 'react-redux'
import { usersSort } from './users.actions.jsx';
import UserComponent from '../user/user.container.jsx';

class UsersComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if(typeof this.props.users.all !== 'undefined'){
      return (
        <div>
          <h1>Users</h1>
          <table>
            <thead>
              <tr>
                <th
                  onClick={()=>this.sortUsers('id')}
                >
                  ID
                </th>
                <th
                  onClick={()=>this.sortUsers('name')}
                >
                  Name
                </th>
                <th
                  onClick={()=>this.sortUsers('age')}
                >
                  Age
                </th>
                <th
                  onClick={()=>this.sortUsers('gender')}
                >
                  Gender
                </th>
                <th>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.users.all.map((user) => 
                <UserComponent 
                  key={user.id} 
                  user={user} 
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

export default connect(mapStateToProps)(UsersComponent);