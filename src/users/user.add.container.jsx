import React from 'react';
import { connect } from 'react-redux'
import { userAdd } from '../users/users.actions.jsx';
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
      <form onSubmit={(e)=>this.handleSubmit(e)}>
        <InputName 
          value={this.state.name}
          autoFocus={true}
          required={true}
          tabIndex={1} 
          handleChange={(e)=>this.handleChange(e)} 
        />
        <InputAge 
          value={this.state.age} 
          tabIndex={2} 
          handleChange={(e)=>this.handleChange(e)} 
        />
        <InputGender 
          value={this.state.gender} 
          tabIndex={3} 
          handleChange={(e)=>this.handleChange(e)} 
        />
        <input tabIndex="4" type="submit" value="Add" />
      </form>
    );
  }

  defaultState(){
    const defaultState = {
      name: '',
      age: 25,
      gender: 'male'
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
