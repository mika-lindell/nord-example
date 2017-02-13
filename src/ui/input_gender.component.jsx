import React from 'react';

class InputGender extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <select 
          name="gender" 
          value={this.props.value}
          autoFocus={this.props.autoFocus}
          required={this.props.required}
          tabIndex={this.props.tabIndex}
          disabled={this.props.disabled}
          onChange={(e)=>this.props.handleChange(e)} 
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
    );
  }
}

export default InputGender;