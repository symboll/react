import React, { Component ,createRef} from 'react'

function A (WrappedComponent) {
  return class A extends Component {
    componentDidMount () {
      this.myref.current.getName && this.myref.current.getName()
    }
    constructor(props) {
      super(props)
      this.state = {
        value:''
      }
      this.myref = createRef()
    }

    inputChange = (e) => {
      this.setState({ value: e.target.value })
    }

    render () {
      const p = {
        value: this.state.value,
        inputChange: this.inputChange
      }
      return (
        <div>
          this is component A
          <WrappedComponent 
            {...this.props} 
            ref={this.myref}
            {...p}
          />
        </div>
      )
    }
  }
}


export default A;