import React, { createContext } from 'react'

const BatteryContext = createContext()

class ContextType extends React.Component {
  constructor () {
    super()
    this.state = {
      n: 40
    }
  }
  render () {
    const { n } = this.state
    return (
      <>
        <button onClick={()=> this.setState({ n: n+1 })}>change Btn</button>
        <BatteryContext.Provider value={n}>
          <Middle />
        </BatteryContext.Provider>
      </>
    )
  }
}

function Middle () {
  return (
    <Battery />
  )
}

class Battery extends React.Component {
  static contextType = BatteryContext

  render () {
    const battery = this.context
    return (
      <div>
        battery: { battery } 
        <br />
        this.context: { this.context }
      </div>
    )
  }
}
export default ContextType;