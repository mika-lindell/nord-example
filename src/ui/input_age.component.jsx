import React from 'react';

class InputAge extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <input 
          tabIndex="2" type="number" name="age" min="0" max="200" 
          value={this.props.value} 
          onChange={(e)=>this.props.handleChange(e)} 
        />
    );
  }
}

export default InputAge;