import React, { Component } from 'react'
import  A from './A'


class B extends Component {
  getName = () => {
    console.log('haha')
  }
  render () {
    console.log(this.props)
    const { value, inputChange} = this.props
    return (
      <div style={{ border: '1px solid #aaa' }}>
        my name is {this.props.name} <br />
        my age is {this.props.age} <br />
        
        this is  component B
        <input type="text" value={value} onChange={inputChange}/>
      </div>
    )
  }
}

export default A(B);