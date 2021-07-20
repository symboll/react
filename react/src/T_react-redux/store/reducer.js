import * as Types from './actionTypes'
const defaultState = {
  value: '',
  list: [],
  asyncInfo: []
}

// eslint-disable-next-line
export default (state = defaultState, action) => {
  switch (action.type) {
    case Types.ADD_TODO_ITEM :{
      const list = [...state.list]
      list.push(state.value)
      return {
        ...state,
        list,
        value: ''
      };
    }
    case Types.CHANGE_INPUT_VALUE:{
      return {
        ...state,
        value: action.value
      }
    }
    case Types.DELETE_LIST_ITEM: {
      const list = [...state.list]
      list.splice(action.value, 1)
      return {
        ...state,
        list
      }
    }
    case Types.SET_ASYNC_INFO: {
      return {
        ...state,
        asyncInfo: action.value
      }
    }
    default: 
  }

  return state
}