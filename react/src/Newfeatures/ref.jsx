import React, {Component} from 'react'

class RefComponent extends Component {


  constructor () {
    super()
    this.inputRef = React.createRef()
  }

  handleSubmit = () => {
    console.log('value==>',this.inputRef.current.value)
  }
  render () {
    return <div>
      <Input ref={this.inputRef} />
      <button onClick={this.handleSubmit}>提交</button>
    </div>
  }
}


const Input = React.forwardRef((props, ref)=> {
  console.log()
  return <input type="text" ref={ref}/>
})
export default RefComponent