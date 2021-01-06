import React, { createContext } from 'react'

const BatteryContext = createContext()

class CtComponent extends React.Component {
  constructor () {
    super()
    this.state = {
      n: 40
    }
  }
  render () {
    const { n } = this.state
    return (
      <BatteryContext.Provider value={n}>
        <Middle />
      </BatteryContext.Provider>
    )
  }
}

function Middle () {
  return (
    <Bar />
  )
}

class Bar extends React.Component {
  static contextType = BatteryContext


  render () {
    const battery = this.context
    return (
      <div>{battery}</div>
    )
  }
}
export default CtComponent;