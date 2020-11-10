import React from 'react'
import { renderRoutes } from 'react-router-config'
import { connect } from 'react-redux'
import Header from '@/common/components/Header'
import { getUserInfo } from './common/components/Header/store/action'

const App = ({ route }) => {
  return <div>
    <Header />
    { renderRoutes(route.routes) }
  </div>
}

App.loadData = (store) => {
  // return store.dispatch(getUserInfo())
}

const mapStateToProps = (state) => ({
  token: state.login.token
})

export default connect(mapStateToProps,null)(App)