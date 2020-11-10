import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const Header = ({ username }) => {
  return <Fragment>
    <Link to="/">首页</Link>
    
    { username ? <>
      <div>用户: {username}</div>
      <button>退出</button>
    </> : <Link to="/login">登录</Link>}
  </Fragment>
}

const mapStateToProps = (state) => ({
  username: state.login.username
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)