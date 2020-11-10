import { SET_USERNAME } from './constant'

const setUsername = username => ({
  type: SET_USERNAME,
  username
})

export const login = (form) => {
  return (dispatch, getState, axios) => {
    return axios.post('/auth/login', {
      ...form
    }).then(res => {
      dispatch(getUserInfo(res.data.token))
    }).catch(err => {
      return Promise.reject(err.response.data)
    })
  }
}

export const getUserInfo = token => {
  return (dispatch, getState, axios) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return axios.get('/auth/userInfo').then(res => {
      dispatch(setUsername(res.data.username))
    }).catch(err => {
      return Promise.reject(err.response.data)
    })
  }
}