import React from 'react'

import Content from './context'
import ContextType from './contextType'
import Lazy from './lazy'
import Memo from './memo'
import Ref from './ref'

function Apis () {
  return (
    <>
      <Content />
      <hr/>
      <ContextType />
      <hr/>
      <Lazy />
      <hr/>
      <Memo />
      <hr/>
      <Ref />
    </>
  )
}

export default Apis;