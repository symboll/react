import React, { useState, useContext, createContext } from 'react'

const Battery = createContext()
const About = createContext()

function Context () {
  const [count, setCount] = useState(23)
  const [name, setName] = useState('zhangsan')
  return (
    <>
      <button onClick={()=> setCount(count+ 1)}>Set Count</button>
      <button onClick={()=> setName(name + 'a')}>Set Name</button>
      <p>count: { count }</p>
      <p>name: { name }</p>
      <Battery.Provider value={count}>
        <About.Provider value={name}>
          <Middle />
        </About.Provider>
      </Battery.Provider>
    </>
  )
}

function Middle() {
  return <Child/>
}

function Child () {
  const count = useContext(Battery)
  const name = useContext(About)
  return (
    <>
      <div> count: { count }</div>
      <div> name: { name }</div>
    </>
  )
}
export default Context;