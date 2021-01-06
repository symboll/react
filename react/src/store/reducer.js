/**
 *  使用  immutable
 */
// import { combineReducers } from 'redux-immutable'
// import { reducer as TodoListreducer } from '../T_immutable/store'

/**
 *  不使用  immutable
 */
import { combineReducers } from 'redux'
import { reducer as TodoListreducer } from '../T_react-redux/store'

export default combineReducers ({
  todo: TodoListreducer
})