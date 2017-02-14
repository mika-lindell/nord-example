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
      focus: false,
      countdown: 5
    }
  }

  render() {

    const editing = this.props.user.status === 'editing';
    const saved = this.props.user.status === 'saved';
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
              Undo ({this.state.countdown})
            </button>
          </td>    
        </tr>
      );
    }else{
      return(
        <tr 
          className={classes}
          onBlur={()=>this.doneEditing(this.props.user, this.state)}
        >
          <td className="user-name">
            <InputName 
              data-focus-on-mount={this.state.focus}
              value={this.state.name} 
              onFocus={(e)=>this.beginEditing(this.props.user)}
              onChange={(e)=>this.handleChange(e)} 
            />
          </td>
          <td className="user-age">
            <InputAge 
              value={this.state.age} 
              onFocus={(e)=>this.beginEditing(this.props.user)}
              onChange={(e)=>this.handleChange(e)} 
            />
          </td>
          <td className="user-gender">
            <InputGender
              value={this.state.gender} 
              onFocus={(e)=>this.beginEditing(this.props.user)}
              onChange={(e)=>this.handleChange(e)} 
              />
          </td>
          <td className="user-actions">
            {!editing &&
              <span>
                <button 
                  title="Edit"
                  className="user-edit" 
                  onClick={(e)=>this.beginEditingWithFocus(this.props.user)}
                >
                  <i className="icon-mode_edit" />
                </button>
                <button 
                  title="Delete"
                  className="user-delete" 
                  onClick={()=>this.beginDeleting(this.props.user)}
                >
                  <i className="icon-delete" />
                </button>
              </span> 
            }
            {editing &&
                <button
                  className="user-save" 
                  onClick={()=>this.doneEditing(this.props.user, this.state)}
                >
                  Done
                </button>
            }
            {saved &&
              <div className="user-badge-saved"><i className="icon-check" /></div>
            }      
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

  beginEditing(user){
    if(this.props.user.status === 'editing') return;
    this.props.dispatch(
      userEditBegin(user)
    );  
  }

  beginEditingWithFocus(user){
    if(this.props.user.status === 'editing') return;
    this.setState({focus: true})
    this.beginEditing(user);
  }

  doneEditing(current, changes){
    this.setState({focus: false})
    this.props.dispatch(
      userEditComplete(current, changes)
    );  
  }

  beginDeleting(user){

    this.props.dispatch(
      userRemoveBegin(user)
    );

    let delay = setTimeout(() => {
      if(this.props.user.status === 'deleting') this.doneDeleting();
    }, 6000)
    
    let timer = setInterval(() => {
      if(this.state.countdown <= 0 || this.props.user.status !== 'deleting') {
        clearInterval(timer);
        clearTimeout(delay);
        this.state.countdown=5;
      }else{
        this.setState({countdown: this.state.countdown-1});
      }
    }, 1000);


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


