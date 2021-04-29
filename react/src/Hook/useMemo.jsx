import React, { useState, useMemo, useCallback, memo } from 'react'

const Middle = memo(function (props) {
  console.log('middle component render !')
  return (
    <div onClick={props.click}>{props.count}</div>
  )
}) 

function Memo () {
  const [count, setCount] = useState(12)
  const double = useMemo(()=> {
    return count * 2
  // eslint-disable-next-line
  },[count === 15])
  // []只执行一次
  // 调用时机和useEffect 不一样。 useEffect 在 渲染之后运行。
  // useMemo 有返回值。 在渲染期间完成。运行结果参与渲染。

  // const handleClick = () => {}

  // const handleClick = useMemo(()=> {
  //   return ()=> {}
  // }, [])

  const handleClick = useCallback(()=> {}, [])
  // 如果useMemo 返回的是一个函数，那么 直接可以用useCallback 省略顶层函数
  // if useMemo(()=> fn,[])   === useCallBack(fn,[])

  return (
    <React.Fragment>
      <button onClick={()=> setCount(count + 1)}>Btn</button>
      <p>count:{count}</p>
      <p>double: {double}</p>
      <Middle count={double} click={handleClick}/>
    </React.Fragment>
  )
}


export default Memo