import React, { Component } from 'react'
import './CssAnimation.less'

class CssAnimation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
  }
  handleClick = () => {
    this.setState((preState) => ({
      show: !preState.show
    }))
  }
  render () {
    const { show } = this.state
    return (
      <>
        <div className={show ? 'show': 'hide'}>hello world</div>
        <button onClick={this.handleClick}>toggle</button>
      </>
    )
  }
}

export default CssAnimation