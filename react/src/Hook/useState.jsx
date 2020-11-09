import React, { useState, memo } from 'react'

function Count () {
  const [count, setCount] = useState(10)
  console.log('Count Component render')
  return (
    <React.Fragment>
      <button onClick={()=> setCount( count+1 )}>Button</button>
      <p>{count}</p>
      <Child 
        number= {100}
      />
    </React.Fragment>
  )
}

const Child = memo(function(props) {
  const [number, setNumber] = useState(()=> props.number)
  console.log('child Component render')
  return (
    <React.Fragment>
      <button onClick={()=> setNumber( number+1 )}>child Button</button>
      <p>{number}</p>
    </React.Fragment>
  )
}) 
export default Count