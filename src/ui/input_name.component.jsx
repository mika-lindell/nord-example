import React from 'react';

class InputName extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <input 
          id="name" 
          name="name" 
          type="text"
          placeholder="Name"
          {...this.props}
        />
    );
  }
}

export default InputName;