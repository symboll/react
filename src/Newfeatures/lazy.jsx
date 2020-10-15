// lazy & Suspense
import React, { Component, lazy, Suspense } from 'react'

const About =  lazy(()=> import(/* webpackChunkName: "About" */'./about.jsx'))

class LazyComponent extends Component {
  constructor () {
    super()
    this.state = {
      hasError: false
    }
  }
  // componentDidCatch () {
  //   this.setState({
  //     hasError: true
  //   })
  // }
  
  static getDerivedStateFromError () {
    return {
      hasError: true
    }
  }
  render () {
    const { hasError } = this.state
    console.log(JSON.stringify(hasError))
    if(hasError) {
      return (<div>error</div>)
    }
    return (
      <Suspense fallback={<div>loading</div>}>
        <About />
      </Suspense>
    )
  }

}

export default LazyComponent;