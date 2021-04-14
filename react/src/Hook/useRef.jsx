// ref
// 1. String ref
// 2. Callback Ref
// 3. CreateRef

// useRef 的 2大作用
// 1. 获取子组件或者DOM节点的句柄
// 2. 渲染周期之间共享数据的存储

import React, { useState, useRef, useEffect, useCallback, useMemo, memo, forwardRef} from 'react'



const Middle = memo(forwardRef((props, ref) => {
  console.log('middle component render !')
  return (
    <div onClick={props.click} ref={ref}>{props.count}</div>
  )
})) 
// class Middle extends React.PureComponent {
//   render () {
//     const  { click, count } = this.props
//     return (
//       <div onClick={ click }>{ count}</div>
//     )
//   }
// }

function Ref () {
  const [count, setCount] = useState(12)
  const double = useMemo(()=> {
    return count * 2
  },[count === 15])

  let it = useRef()
  const handleClick = useCallback(()=> {
    console.log('middleRef current', middleRef.current)
  }, [])

  const middleRef = useRef()
  

  useEffect(()=> {
    it.current = setInterval(()=> {
      setCount(count => count+ 1)
    }, 1000)
  }, [])

  useEffect(()=> {
    if(count > 20) {
      clearInterval(it.current)
    }
  })

  return (
    <React.Fragment>
      <button onClick={()=> setCount(count + 1)}>Btn</button>
      <p>count:{count}</p>
      <p>double: {double}</p>
      <Middle count={double} click={handleClick} ref={middleRef}/>
    </React.Fragment>
  )
}


export default Ref;