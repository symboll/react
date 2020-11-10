import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { getHomeList, changeAppName } from './store/action'
class Home extends Component {
  render() {
    const { name, list } = this.props
    const { changeAppName } = this.props
    return <Fragment>
      <div>hello { name }</div>
      <button onClick={ changeAppName }>按钮</button>
      <hr />
      { list.map(item =><div key={item._id}>{item.title}</div>) }
    </Fragment>
  }

  componentDidMount (){
    if(!this.props.list.length) {
      this.props.getList()
    }
  }
}

Home.loadData = (store) => {
  return store.dispatch(getHomeList())
}

const mapStateToProps = (state) => ({
  name: state.home.name,
  list: state.home.list
})
const mapDispatchToProps = (dispatch) => ({
  getList() {
    dispatch(getHomeList())
  },

  changeAppName() {
    dispatch(changeAppName('zhangsan'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home) 