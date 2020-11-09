import React, { Component } from 'react';
import A from './A'

class C extends Component {
  render() {
    return (
      <div style={{ border: '1px solid red', marginTop: '10px' }}>
        my name is {this.props.name} <br />
        my age is  {this.props.age}
      </div>
    );
  }
}

export default A(C);