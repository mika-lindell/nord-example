import React from 'react';

class Row extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const classes = this.props.className ? this.props.className + 'pure-g' : 'pure-g';

    return(
        <div 
          className={classes}
        >
        {this.props.children}
        </div>
    );
  }
}

export default Row;