import * as Types from './actionTypes'
const defaultState = {
  value: '',
  list: []
}

export default (state = defaultState, action)=> {

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
    default: 
  }

  return state
}