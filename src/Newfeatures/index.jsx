import React from 'react'

import CoComponent from './context'
import CtComponent from './contextType'
import LazyComponent from './lazy'
import MemoComponent from './memo'
import RefComponent from './ref'

function Newfeatures () {
  return (
    <React.Fragment>
    <CoComponent />
    
    <CtComponent />

    <LazyComponent />

    <MemoComponent />

    <RefComponent />
    </React.Fragment>
  )
}

export default Newfeatures;