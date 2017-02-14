import React from 'react';

class Col extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const u   = this.props.u  ? `pure-u-${this.props.u} `     : '';
    const sm  = this.props.sm ? `pure-u-sm-${this.props.sm} ` : '';
    const md  = this.props.md ? `pure-u-md-${this.props.md} ` : '';
    const lg  = this.props.lg ? `pure-u-lg-${this.props.lg} ` : '';
    const xl  = this.props.xl ? `pure-u-xl-${this.props.xl} ` : '';

    const cols = u+sm+md+lg+xl;
    const classes = this.props.className ? this.props.className + cols : cols;

    return(
        <div 
          className={classes}
        >
          {this.props.children}
        </div>
    );
  }
}

export default Col;