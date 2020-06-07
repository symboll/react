import React, { Component, Fragment } from 'react'
import { Button, Input, List } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons';

import  * as Action  from './store/actionCreates'
import store from './store'
import './index.less'

const ListItem = List.Item

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }

  handleStoreChange = () => {
    this.setState(store.getState())
  }

  handleClick = () => {
    store.dispatch(Action.addItemAction())
  }

  handleChangeInputValue = (e) => {
    store.dispatch(Action.inputChangeAction(e.target.value))
  }

  handleDeleteItem =(index) => {
    store.dispatch(Action.deleteListItemAction(index))
  }
  render () {
    const { value, list } = this.state
    return (
      <Fragment>
        
        <div className="header_wrapper">
          <Input value={value} onChange={this.handleChangeInputValue}></Input>
          <Button type="primary" onClick={this.handleClick}>提交</Button>
        </div>

        
        <List
          bordered
          dataSource={list}
          renderItem={(item,index) => (
            <ListItem key={item} className="list_item">
              <span>{item}</span> 
              <CloseCircleOutlined 
                onClick={() => this.handleDeleteItem(index)}
                className="delete_icon"
              />
            </ListItem>
          )}
        />
      </Fragment>
    )
  }

}

export default TodoList
