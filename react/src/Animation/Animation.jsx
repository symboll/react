import React, { Component } from 'react'
import { CSSTransition,  TransitionGroup } from 'react-transition-group'
import './Animation.less'

class Animation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true,
      list: []
    }
  }
  handleClick = () => {
    this.setState((preState) => ({
      show: !preState.show
    }))
  }
  handleAdd = () => {
    this.setState((preState) => ({
      list: [...preState.list, 'item']
    }))
  }
  render () {
    const { show, list } = this.state
    return (
      <>
        <CSSTransition
          in={show}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          appear
        >
          <div >hello world</div>
        </CSSTransition>
        <button onClick={this.handleClick}>toggle</button>

        <hr />

        <TransitionGroup>
          { list.map((item, index) => (
            <CSSTransition
              timeout={1000}
              key={index}
              classNames='fade'
              unmountOnExit
              appear
            >
              <div>{item}</div>
            </CSSTransition>))}
        </TransitionGroup>
        <button onClick={ this.handleAdd }>Add</button>
      </>
    )
  }
}

export default Animation