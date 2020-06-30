import React from 'react'

import CoComponent from './context'
import CtComponent from './contextType'
import LazyComponent from './lazy'
import MemoComponent from './memo'

function Newfeatures () {
  return (
    <React.Fragment>
    <CoComponent />
    
    <CtComponent />

    <LazyComponent />

    <MemoComponent />
    </React.Fragment>
  )
}

export default Newfeatures;