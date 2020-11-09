import React, { Component } from 'react'
import D from './D'

class F extends Component {
  render () {
    return (
      <p>
        我是F组件
      </p>
    )
  }
}

export default D(F);