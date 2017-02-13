import React from 'react';
import { connect } from 'react-redux'
import { 
  userRemoveBegin, 
  userRemoveCancel, 
  userRemoveComplete, 
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

    const editing = this.props.user.status === 'editing';
    const deleting = this.props.user.status === 'deleting';
    const classes = editing ? 'user editing' : 'user not-editing';
    
    if(deleting){
      return(
        <tr className="user deleted">
          <td colSpan="3">
            {this.state.name} was deleted
          </td>
          <td className="user-actions">
            <button 
              className="user-undo" 
              onClick={()=>this.cancelDeleting(this.props.user)}
            >
              Undo
            </button>
          </td>    
        </tr>
      );
    }else{
      return(
        <tr 
          className={classes}
          onFocus={()=>this.startEditing(this.props.user)}
          onBlur={()=>this.doneEditing(this.props.user, this.state)}
        >
          <td className="user-name">
            <InputName 
              data-focus-on-mount={editing}
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
            {!editing &&
              
                <button 
                  className="user-edit" 
                  onClick={()=>this.startEditing(this.props.user)}
                >
                  
                  Edit
                </button>
            }
            {editing &&
                <button
                  className="user-save" 
                  onClick={()=>this.doneEditing(this.props.user, this.state)}
                >
                  Save
                </button>
            }
            <button 
              title="Delete"
              className="user-delete" 
              onClick={()=>this.startDeleting(this.props.user)}
            >
              <i className="icon-delete" />
            </button>          
          </td>
        </tr>
      );
    }

  }

  handleChange(e){
    const newState = {}; 
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  startEditing(user){
    if(this.props.user.status === 'editing') return;
    this.props.dispatch(
      userEditBegin(user)
    );  
  }

  doneEditing(current, changes){
    this.props.dispatch(
      userEditComplete(current, changes)
    );  
  }

  startDeleting(user){
    this.props.dispatch(
      userRemoveBegin(user)
    );
    setTimeout(()=>this.doneDeleting(), 5000)
  }

  cancelDeleting(user){
     this.props.dispatch(
      userRemoveCancel(user)
    ); 
  }

  doneDeleting(){
    if(this.props.user.status === 'deleting'){
      this.props.dispatch(
        userRemoveComplete(this.props.user) // TODO: Do id-based check in reduced so i can pass user as param and dont have to use this.props.user
      );
    }
  }  
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UserComponent);


