import React from 'react';
import { connect } from 'react-redux'
import { usersSort } from './users.actions.jsx';
import UserComponent from '../user/user.container.jsx';

class UsersComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const sortIcon = this.props.users.sort.asc ? 'icon-arrow_downward' : 'icon-arrow_upward';

    if(typeof this.props.users.all !== 'undefined'){
      return (
        <div>
          <table>
            <thead>
              <tr>
                <th
                  onClick={()=>this.sortUsers('id')}
                >
                  ID
                  {this.props.users.sort.key === 'id' && 
                    <i className={sortIcon} />
                  }
                </th>
                <th
                  onClick={()=>this.sortUsers('name')}
                >
                  Name
                  {this.props.users.sort.key === 'name' && 
                    <i className={sortIcon} />
                  }
                </th>
                <th
                  onClick={()=>this.sortUsers('age')}
                >
                  Age
                  {this.props.users.sort.key === 'age' && 
                    <i className={sortIcon} />
                  }                  
                </th>
                <th
                  onClick={()=>this.sortUsers('gender')}
                >
                  Gender
                  {this.props.users.sort.key === 'gender' && 
                    <i className={sortIcon} />
                  }
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