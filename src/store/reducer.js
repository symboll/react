// import { combineReducers } from 'redux'
// import { reducer as TodoListreducer } from '@/T_react-redux/store'

import { combineReducers } from 'redux-immutable'
import { reducer as TodoListreducer } from '../T_immutable/store'

export default combineReducers ({
  todo: TodoListreducer
})