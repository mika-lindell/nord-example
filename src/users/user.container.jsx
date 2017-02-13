import React from 'react';
import { connect } from 'react-redux'
import { 
  userRemove, 
  userEditBegin, 
  userEditComplete 
} from '../users/users.actions.jsx';
import InputName from '../ui/input_name.component.jsx';
import InputAge from '../ui/input_age.component.jsx';
import InputGender from '../ui/input_gender.component.jsx';

class UserComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      age: this.props.user.age,
      gender: this.props.user.gender,
    }
  }

  render() {

    return(
      <tr>
        <td>
          #{this.props.user.id}
        </td>
        <td>
          <InputName 
            value={this.state.name} 
            disabled={this.isDisabled()}
            handleChange={(e)=>this.handleChange(e)} 
          />
        </td>
        <td>
          <InputAge 
            value={this.state.age} 
            disabled={this.isDisabled()}
            handleChange={(e)=>this.handleChange(e)} 
          />
        </td>
        <td>
          <InputGender 
            value={this.state.gender} 
            disabled={this.isDisabled()}
            handleChange={(e)=>this.handleChange(e)} 
            />
        </td>
        <td>
          <button 
            onClick={()=>this.editUser(this.props.user)}
          >
            edit
          </button>
          <button 
            onClick={()=>this.removeUser(this.props.user)}
          >
            rem
          </button>
        </td>
      </tr>
    );

  }

  handleChange(e){
    const newState = {}; 
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  editUser(user){
    if(!this.props.users.editing.inProgress){
      this.props.dispatch(
        userEditBegin(user)
      );      
    }else{
      this.props.dispatch(
        userEditComplete(user, this.state)
      );    
    }
  }

  removeUser(user){
    this.props.dispatch(
      userRemove(user)
    );
  }

  isDisabled(){

    if(!this.props.users.editing.user) 
      return true;
    else if(this.props.users.editing.user.id !== this.props.user.id)
      return true;
    else
      return false; 
  }


}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UserComponent);


