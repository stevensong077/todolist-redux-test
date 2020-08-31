import React from 'react';
import 'antd/dist/antd.css';  
import { Button,Input,List } from 'antd';

const TodolistUI = (props)=>{
  return(<div>
    <Input 
      value = {props.inputValue}
      style= {style.input}
      placeholder='input something'
      onChange = {props.handleInputChange}
    />
    <Button
      onClick = {props.handleBtnClick}
      type = 'primary'
    >submit</Button>
    <div>
      <List
        style= {style.listItem}
        bordered
        dataSource={props.list}
        renderItem={(item,index) =>(
          <List.Item onClick={()=>{props.handleItemClick(index)}}>
            {item}
          </List.Item>
        )}
      />
    </div>
</div>);
}

const style ={

  input:{
    width:"300px",
    margin:"20px 0px 0px 20px"
  },

  listItem:{
    width:"376px",
    margin:"0px 0px 0px 20px"
 }
}

export default TodolistUI;