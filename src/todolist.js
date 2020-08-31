import React, { Component } from 'react';
import store from './store/index.js';
import {changeInputValue,addTodoItem,deleteItem} from './store/actionCreator'
import TodolistUI from './todolistUI';

class Todolist extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleItemClick=this.handleItemClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render(){
    return ( 
      <TodolistUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleItemClick={this.handleItemClick}
      />
    );
  }
  handleInputChange(e){
    const action= changeInputValue(e.target.value);
    store.dispatch(action);
  }

  handleBtnClick(){
    const action= addTodoItem();
    store.dispatch(action);
  }

  handleItemClick(index){
    const action= deleteItem(index);
    store.dispatch(action);
  }

  handleStoreChange(){
    this.setState(store.getState())
  }

}
  export default Todolist;
