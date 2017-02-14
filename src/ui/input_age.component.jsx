import React from 'react';

class InputAge extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <input 
          type="number" id="age" name="age" min="0" max="200" 
          placeholder="Age"
          {...this.props}
        />
    );
  }
}

export default InputAge;