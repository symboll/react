import React, { createContext } from 'react'


const BatteryContext = createContext()
const { Provider, Consumer } = createContext()

class CoComponent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      n: 20,
      m: 101
    }
  }
  render () {
    const { n, m } = this.state
    return (
      <div>
        <button onClick={()=>this.setState({ n: n+1 })}>change Btn</button>
        <Provider value={n}> 
          <BatteryContext.Provider value={m}>
            <Middle />
          </BatteryContext.Provider>
        </Provider>
      </div>
      
    )
  }
}

function Middle () {
  return (
    <Bar />
  )
}

function Bar () {
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



export default CoComponent;