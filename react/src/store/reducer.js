import { combineReducers } from 'redux-immutable'
import { reducer as TodoListreducer } from '../T_immutable/store'

export default combineReducers ({
  todo: TodoListreducer
})