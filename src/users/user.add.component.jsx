import React from 'react';
import User from './user.type.jsx';

class UserAddComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.defaultState();
  }

  render() {

    return(
      <form onSubmit={(e)=>this.handleSubmit(e)}>
        <input tabIndex="1" autoFocus required type="text" name="name" value={this.state.name} onChange={(e)=>this.handleChange(e)} />
        <input tabIndex="2" type="number" name="age" min="0" max="200" value={this.state.age} onChange={(e)=>this.handleChange(e)} />
        <select tabIndex="3"  name="gender" value={this.state.gender} onChange={(e)=>this.handleChange(e)} >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input tabIndex="4" type="submit" value="Add" />
      </form>
    );

  }

  handleSubmit(e){
    e.preventDefault();
    this.props.add(new User(this.state));
    this.setState(this.defaultState());
  }

  handleChange(e){
    const newState = {}; 
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  defaultState(){

    const defaultState = {
      name: '',
      age: 25,
      gender: 'male'
    };

    return Object.assign({}, defaultState);
  }

}

export default UserAddComponent;
