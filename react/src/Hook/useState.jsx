import React, { useState, memo } from 'react'

function Counter () {
  const [m, setM] = useState(10)
  const [n, setN] = useState(20)
  console.log('Count component render')
  return (
    <React.Fragment>
      <button onClick={()=> setM( m + 1 )}>change M</button>
      <button onClick={()=> setN( n + 1 )}>change N</button>
      <p>M: { m } </p>
      <p>N: { n }</p>
      <Child 
        m = {m}
      />
    </React.Fragment>
  )
}

const Child = memo(function(props) {
  const [number, setNumber] = useState(()=> props.m)
  console.log('child component render')
  return (
    <React.Fragment>
      <button onClick={()=> setNumber( number+1 )}>child Button change M</button>
      <p>M: {number}</p>
    </React.Fragment>
  )
}) 
export default Counter