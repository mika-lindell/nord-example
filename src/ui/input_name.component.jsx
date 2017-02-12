import React from 'react';

class InputName extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <input 
          tabIndex="1" required type="text" name="name" 
          value={this.props.value} 
          onChange={(e)=>this.props.handleChange(e)} 
        />
    );
  }
}

export default InputName;