import React, { Component } from 'react';
import eventEmitter from './util'


class ChildA extends Component {
  constructor () {
    super()
    this.state = {
      text: '组件A原有信息'
    }
  }
  componentDidMount () {
    eventEmitter.on('message', this.setMessage)
  }
  setMessage = (text) => {
    this.setState({
      text
    })
  }
  render() {
    const { text } = this.state
    return (
      <div style={{ background: "pink" }}>
         组件A : { text }
      </div>
    );
  }
}

export default ChildA