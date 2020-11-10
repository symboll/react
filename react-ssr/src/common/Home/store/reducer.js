import { INIT_LIST, CHANGE_APP_NAME } from './constant'

const defaultStore = {
  list: [],
  name: 'sss'
}

export default (state = defaultStore, action) => {
  switch (action.type) {
    case INIT_LIST: {
      return {
        ...state,
        list: action.data
      }
    }
    case CHANGE_APP_NAME: {
      return {
        ...state,
        name: 'zhangsan'
      }
    }
  }
  return state
}