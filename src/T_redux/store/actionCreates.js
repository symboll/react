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