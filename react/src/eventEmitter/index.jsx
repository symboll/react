import React, { Component } from 'react';
import ChildA from './childA'
import ChildB from './childB'


class EventEmitter extends Component {
  render() {
    return (
      <>
        <ChildA />
        <ChildB />
      </>
    );
  }
}

export default EventEmitter