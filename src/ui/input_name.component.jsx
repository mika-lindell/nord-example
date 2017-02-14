import React from 'react';

class InputName extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    return(
        <input 
          ref={(input)=>this.elem=input}
          id="name" 
          name="name" 
          type="text"
          placeholder="Name"
          {...this.props}
        />
    );
  }

  componentDidUpdate(){
    if(this.props['data-focus-on-mount']) this.elem.focus();
  }
}

export default InputName;