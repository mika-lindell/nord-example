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

    const classes = 
      this.props.users.editing.inProgress 
      && this.props.users.editing.user.id === this.props.user.id 
      ? 'user editing' : 'user not-editing';

    return(
      <tr 
        className={classes}
        onFocus={()=>this.startEditing(this.props.user)}
        onBlur={()=>this.doneEditing(this.props.user, this.state)}
      >
        <td className="user-id">
          #{this.props.user.id}
        </td>
        <td className="user-name">
          <InputName 
            value={this.state.name} 
            onChange={(e)=>this.handleChange(e)} 
            
          />
        </td>
        <td className="user-age">
          <InputAge 
            value={this.state.age} 
            onChange={(e)=>this.handleChange(e)} 
          />
        </td>
        <td className="user-gender">
          <InputGender
            value={this.state.gender} 
            onChange={(e)=>this.handleChange(e)} 
            />
        </td>
        <td className="user-actions">
          <button 
            onClick={()=>this.toggleEditing(this.props.user, this.state)}
          >
            <i className="icon-mode_edit" />
          </button>
          <button 
            onClick={()=>this.removeUser(this.props.user)}
          >
            <i className="icon-delete" />
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

  startEditing(user){
    this.props.dispatch(
      userEditBegin(user)
    );  
  }

  doneEditing(current, changes){
    this.props.dispatch(
      userEditComplete(current, changes)
    );  
  }

  toggleEditing(current){
    this.startEditing(current)   
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


