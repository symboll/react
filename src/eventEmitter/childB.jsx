import React, { Component } from 'react';
import eventEmitter from './util'


class ChildB extends Component {

  handleClick = () => {
    eventEmitter.emit('message', '组件B修改A之后的信息')
  }
  render() {
    return (
      <div style={{ background: "#6789ab" }}>
        <button onClick={this.handleClick}>修改组件A的信息</button>
      </div>
    );
  }
}

export default ChildB