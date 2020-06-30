import React from 'react'

import Con from './context'
import Cont from './contextType'
import Laz from './lazy'
import Mem from './memo'

function Newfeatures () {
  return (
    <React.Fragment>
    <Con />
    
    <Cont />

    {/* <Laz /> */}

    <Mem />
    </React.Fragment>
  )
}

export default Newfeatures;