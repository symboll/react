import React, { memo } from 'react'

class Baz extends React.PureComponent {
  render () {
    console.log('class Component Foo render')
    return (
      <p>{this.props.n}</p>
    )
  }
}

const Bar = memo(function (props) {
  const { n } = props
  console.log('function Component Bar render')
  return (
    <div>{n}</div>
  )
})

// function Bar () {
//   console.log('function Component Bar render')
//   return (
//     <div>s</div>
//   )
// }

class MemoComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      n: 34
    }
  }
  render () {
    const { n } = this.state
    return (
      <React.Fragment>
        <button onClick={()=> this.setState({ n: n+1 })}>Btn</button>
        <Baz />
        <Bar />
      </React.Fragment>
    )
  }
}

export default MemoComponent