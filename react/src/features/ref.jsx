import React, {Component} from 'react'

class Ref extends Component {


  constructor () {
    super()
    this.inputRef = React.createRef()
  }

  handleSubmit = () => {
    console.log('value==>',this.inputRef.current.value)
  }
  render () {
    return <div>
      {/* <Input ref={this.inputRef} /> */}
      <input type="text" ref={this.inputRef}/>
      <button onClick={this.handleSubmit}>提交</button>
    </div>
  }
}

// eslint-disable-next-line
const Input = React.forwardRef((props, ref)=> {
  return <input type="text" ref={ref}/>
})
export default Ref