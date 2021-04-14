import React , { useEffect, useState } from 'react'

// 副作用调用时机
// Mount 之后
// Update之后
// Unmount之前

function Effect () {
  const [count, setCount] = useState(0)
  const [size, setSize] = useState({
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth
  })
  
  const onResize = () => {
    setSize({
      height: document.documentElement.clientHeight,
      width: document.documentElement.clientWidth
    })
  }
  useEffect(()=> {
    document.title = count
  },[count])

  useEffect(()=> {
    window.addEventListener('resize', onResize, false)
    return () => window.removeEventListener('resize', onResize, false)
  },[])
  // 第二个参数是一个 数组。
  // 不写第二个参数，每次都执行。  空数组 ，代表只执行一次。

  const onClick = () => {
    console.log('click')
  }
  useEffect(()=> {
    document.querySelector('#size').addEventListener('click', onClick, false)
    return ()=> {
      console.log('removeEventListener')
      document.querySelector('#size').removeEventListener('click', onClick, false)
    }
  })
  return (
    <React.Fragment>
      <button onClick={()=> setCount(count+ 1)}>Button</button>
      <p>{count}</p> 

      <p>{size.width} * {size.height }</p>
      {
        count%2 
          ? <div id="size">span</div>
          : <p id="size">p</p>
      }
      
    </React.Fragment>
  )
}

export default Effect