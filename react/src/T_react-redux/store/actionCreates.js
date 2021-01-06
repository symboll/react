import axios from 'axios'
import * as Types from './actionTypes'

export const inputChangeAction = (value) => ({
  type: Types.CHANGE_INPUT_VALUE,
  value
})

export const addItemAction = () => ({
  type: Types.ADD_TODO_ITEM
})


export const deleteListItemAction = (value) => ({
  type: Types.DELETE_LIST_ITEM,
  value 
})

const setAsyncInfo = (value) => ({
  type: Types.SET_ASYNC_INFO,
  value
})
// redux-thunk
export const getAsyncInfo = () => (dispatch) => {
  axios.get('http://localhost:3000/posts').then(res => {
    dispatch(setAsyncInfo(res.data))
  })
}

