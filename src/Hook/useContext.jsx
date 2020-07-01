import React, { useState, useContext, createContext } from 'react'

const Battery = createContext()

function Cross () {
  const [count, setCount] = useState(23)
  return (
    <React.Fragment>
      <button onClick={()=> setCount(count+ 1)}>Btn</button>
      <p>{count}</p>

      <Battery.Provider value={count}>
        <Middle />
      </Battery.Provider>
    </React.Fragment>
  )
}

function Middle() {
  return <Child/>
}

function Child () {
  const count = useContext(Battery)
  return <div>{ count}</div>
}
export default Cross;