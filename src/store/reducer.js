import {CHANGE_INPUT_VAlUE, ADD_TODO_ITEM, DELETE_ITEM, GET_LIST} from './actionType.js'


const defaultState ={
  inputValue:'',
  list:[]
}

export default (state=defaultState,action)=>{
  if (action.type === CHANGE_INPUT_VAlUE){
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === ADD_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue='';
    return newState;
  }

  if (action.type === DELETE_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }

  if (action.type === GET_LIST){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data.data.list
    return newState;
  }


  return state
}
