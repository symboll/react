import React from 'react'
import { connect } from 'react-redux'
import { login } from './store/actions'
class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      form: {
        username: '',
        password: ''
      }
    }
  }
  handleChange = (type, e) => {
    const form = {
      ...this.state.form,
      [type]: e.target.value
    }
    this.setState({
      form
    })
  }
  render() {
    const { form } = this.state
    const { handleLogin } = this.props
    return <div>
      <div>
        <span>用户名:</span>
        <input 
          type="text"
          value={form.username}
          onChange={(e) => this.handleChange('username', e)}
        />
      </div>
      <div>
        <span>用户名:</span>
        <input
          type="text" 
          type="password" 
          value={form.password}
          onChange={(e) => this.handleChange('password', e)}
        />
      </div>
      
      <div>
        <button onClick={ () => handleLogin(form) }>登录</button>
      </div>

    </div>
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps =(dispatch) => ({
  handleLogin (form) {
    dispatch(login(form)).catch(err => {
      alert(err.message)
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)