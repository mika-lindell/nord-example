import React from 'react';

class InputGender extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <select 
          id="gender" 
          name="gender" 
          {...this.props}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
    );
  }
}

export default InputGender;