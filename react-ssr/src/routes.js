// import React from 'react'
// import { Route } from 'react-router-dom'
import App from './App'
import Home from './common/Home'
import Login from './common/Login'


export default [{
  path: '/',
  component: App,
  // loadData: App.loadData,
  routes: [
    {
      path: '/',
      component: Home,
      exact: true,
      loadData: Home.loadData,
      key: 'home',
    },
    {
      path: '/login',
      component: Login,
      exact: true,
      key: 'login'
    }
  ]
}]
// export default (
//   <div>
//     <Route path="/" exact  component={Home}/>
//     <Route path="/login" exact component={Login}/>
//   </div>
// )