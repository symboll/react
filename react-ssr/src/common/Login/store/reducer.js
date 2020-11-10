import { SET_USERNAME } from './constant'

const defaultState = {
  username: 'zhangsan'
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case SET_USERNAME :
      return { ...state, token: action.username }

  }
  return state
}
