import React from 'react';

class InputGender extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <select 
          tabIndex="3" name="gender" 
          value={this.props.value} 
          onChange={(e)=>this.props.handleChange(e)} 
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
    );
  }
}

export default InputGender;