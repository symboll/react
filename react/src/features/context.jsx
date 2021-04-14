import React, { createContext } from 'react'


const BatteryContext = createContext()
const { Provider, Consumer } = createContext()

class Content extends React.Component {
  constructor () {
    super()
    this.state = {
      n: 20,
      m: 100
    }
  }
  render () {
    const { n, m } = this.state
    return (
      <>
        <button onClick={()=>this.setState({ n: n+1, m: m+2 })}>change Btn</button>
        <Provider value={n}> 
          <BatteryContext.Provider value={m}>
            <Middle />
          </BatteryContext.Provider>
        </Provider>
      </>
      
    )
  }
}

function Middle () {
  return (
    <Battery />
  )
}

function Battery () {
  return (
    <Consumer>
      { n => <div> 
          <BatteryContext.Consumer>
            {
              m => <p>m: {m}</p>
            }
          </BatteryContext.Consumer>
            n: {n}
        </div> 
      }
    </Consumer>
  )
}



export default Content;