import React, { memo } from 'react'

class A extends React.PureComponent {
  render () {
    console.log('class component A render')
    return (
      <p>{this.props.n}</p>
    )
  }
}

const B = memo(
  function (props) {
    const { n } = props
    console.log('function component B render')
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

const C = function ({ n }) {
  console.log('function component C render')
  return (
    <div>{ n }</div>
  )
}

class Memo extends React.Component {
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
      <>
        <button onClick={()=> this.setState({ n: n+1 })}>Class Component Btn:{n}</button>
        <button onClick={()=> this.setState({ m: m+1 })}>function Component Btn:{m}</button>
        <A n={n}/>
        <B n={m}/>
        <C n={m}/>
      </>
    )
  }
}

export default Memo