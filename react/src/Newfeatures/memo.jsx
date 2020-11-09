import React, { memo } from 'react'

class Baz extends React.PureComponent {
  render () {
    console.log('class Component Foo render')
    return (
      <p>{this.props.n}</p>
    )
  }
}

const Bar = memo(
  function (props) {
    const { n } = props
    console.log('function Component Bar render')
    return (
      <div>{n}</div>
    )
  },
  (prev, next) => {
    console.log('prev',prev)
    console.log('next',next)
    console.log('prev.n === next.n',prev.n === next.n)
    return prev.n === next.n              // 返回值是false 执行第一个function
  }
)

class MemoComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      n: 34,
      m: 23
    }
  }
  render () {
    const { n,m } = this.state
    return (
      <React.Fragment>
        <button onClick={()=> this.setState({ n: n+1 })}>Class Component Btn:{n}</button>
        <button onClick={()=> this.setState({ m: m+1 })}>function Component Btn:{m}</button>
        <Baz n={n}/>
        <Bar n={m}/>
      </React.Fragment>
    )
  }
}

export default MemoComponent