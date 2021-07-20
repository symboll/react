import * as Types from './actionTypes'
import { fromJS } from 'immutable'

const defaultState =fromJS({
  value: '',
  list: []
}) 

export default (state = defaultState, action)=> {

  switch (action.type) {
    case Types.ADD_TODO_ITEM :{
      const list = state.get('list').toJS()
      list.push(state.get('value'))
      return state.merge({
        value: fromJS(''),
        list: fromJS(list)
      })
    }
    case Types.CHANGE_INPUT_VALUE:{
      return state.set('value', fromJS(action.value))
    }
    case Types.DELETE_LIST_ITEM: {
      const list = state.get('list')
      return state.set('list', fromJS(list.splice(action.value,1)))
    }
    default: 
      break;
  }

  return state
}