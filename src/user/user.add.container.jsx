import React from 'react';
import { connect } from 'react-redux'
import { userSetStatus, userAdd } from '../users/users.actions.jsx';
import InputName from '../ui/input_name.component.jsx';
import InputAge from '../ui/input_age.component.jsx';
import InputGender from '../ui/input_gender.component.jsx';
import User from './user.type.jsx';

class UserAddComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.defaultState();
  }

  render() {
    return(
      <form 
        className="form-add-user"
        onSubmit={(e)=>this.handleSubmit(e)}
      >
        <fieldset>
          <label htmlFor="name">Name</label>
          <InputName 
            value={this.state.name}
            autoFocus={true}
            required={true}
            onChange={(e)=>this.handleChange(e)} 
          />
          <label htmlFor="age">Age</label>
          <InputAge 
            value={this.state.age} 
            required={true}
            onChange={(e)=>this.handleChange(e)} 
          />
          <label htmlFor="gender">Gender</label>
          <InputGender 
            value={this.state.gender} 
            required={true}
            onChange={(e)=>this.handleChange(e)} 
          />
        <button className="form-submit">
          Add
        </button>
        </fieldset>
      </form>
    );
  }

  defaultState(){
    const defaultState = {
      name: '',
      age: '',
      gender: 'male',
      status: 'new'
    };
    return Object.assign({}, defaultState);
  }

  handleChange(e){
    const newState = {}; 
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.dispatch(
      userAdd(new User(this.state))
    );

    this.setState(this.defaultState());
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UserAddComponent);
