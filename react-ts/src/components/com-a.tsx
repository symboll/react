import { useState, useEffect } from 'react';

function ComA () {
  const [count, setCount] = useState(0)
  useEffect(()=> {
    console.log('effect')
    return ()=> {
      console.log('effect off')
    }
  }, [])      // 空数组代表只执行一次
  return (
    <div>
      { count }
      <button onClick={ ()=>  setCount(count + 1)}>BTN</button>
    </div>
  )
}

export default ComA