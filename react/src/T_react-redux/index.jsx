import React, { memo }from 'react';
import { connect } from 'react-redux';
import {Input, Button,List } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'

import { Action } from './store'
import './index.less'

const ListItem = List.Item

function mapStateToProps(state) {
  return {
    value: state.todo.value,
    list: state.todo.list,
    asyncInfo: state.todo.asyncInfo
  };
}


function mapDispatchToProps (dispatch) {
  return {
    handleChangeInputValue (e) {
      dispatch(Action.inputChangeAction(e.target.value))
    },
    handleClick () {
      dispatch(Action.addItemAction())
    },
    handleDeleteItem (index) {
      dispatch(Action.deleteListItemAction(index))
    },
    handleGetAsyncInfo() {
      dispatch(Action.getAsyncInfo())
    }
  }
}

const TodoList = memo(function (props) {
  const { value,list, asyncInfo } = props
  const {handleChangeInputValue, handleClick, handleDeleteItem, handleGetAsyncInfo } = props
  return (
    <div>
      <div className="header_wrapper">
        <Input value={value} onChange={handleChangeInputValue}></Input>
        <Button type="primary" onClick={ handleClick}>提交</Button>
      </div>

      
      <List
        bordered
        dataSource={list}
        renderItem={(item,index) => (
          <ListItem key={item} className="list_item">
            <span>{item}</span> 
            <CloseCircleOutlined 
              onClick={() => handleDeleteItem(index)}
              className="delete_icon"
            />
          </ListItem>
        )}
      />

      <Button onClick={handleGetAsyncInfo} type="primary" className="mt_10">获取异步信息</Button>
      <div>
        { asyncInfo.map(item => <div key={item._id}>{item.title}</div>) }
      </div>
    </div>
  );
})


export default connect( mapStateToProps,mapDispatchToProps)(TodoList);