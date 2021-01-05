import React from 'react'
import Count from './useState'
import Sider from './useEffect'
import Cross from './useContext'
import Optimi from './useMemo'
import Pool from './useRef'
import Custom from './custom'

function Hook () {
  return (
    <React.Fragment>
      {/* <Count />
      <Sider />
      <Cross />
      <Optimi /> 
      <Pool /> */}
      <Custom />
    </React.Fragment>
  )
}


export default Hook;