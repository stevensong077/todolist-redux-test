import {CHANGE_INPUT_VAlUE, ADD_TODO_ITEM, DELETE_ITEM, GET_LIST} from './actionType'

export const changeInputValue = (value) => ({
  type:CHANGE_INPUT_VAlUE,
  value
})

export const addTodoItem = () => ({
  type:ADD_TODO_ITEM,
})

export const deleteItem = (index) => ({
  type:DELETE_ITEM,
  index
})

export const getList = (data)=>({
  type:GET_LIST,
  data
})