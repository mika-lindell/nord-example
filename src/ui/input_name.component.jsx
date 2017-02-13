import React from 'react';

class InputName extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <input 
          type="text" name="name" 
          value={this.props.value} 
          autoFocus={this.props.autoFocus}
          required={this.props.required}
          tabIndex={this.props.tabIndex}
          disabled={this.props.disabled}
          onChange={(e)=>this.props.handleChange(e)} 
        />
    );
  }
}

export default InputName;