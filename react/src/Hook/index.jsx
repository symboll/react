import React from 'react'
import Counter from './useState'
import Effect from './useEffect'
import Context from './useContext'
import Memo from './useMemo'
import Ref from './useRef'
import Custom from './custom'

function Hook () {
  return (
    <>
      <Counter />
      <hr />
      <Effect />
      <hr />
      <Context />
      <hr />
      <Memo /> 
      <hr />
      <Ref />
      <hr />
      <Custom />
    </>
  )
}


export default Hook;