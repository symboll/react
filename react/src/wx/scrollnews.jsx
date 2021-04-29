import React,{ useState } from 'react'
import './scrillnews.less'

const l = [
  '君不见黄河之水天上来',
  '奔流到海不复回',
  '君不见高堂明镜悲白发',
  '朝如青丝暮成雪',
  '人生得意须尽欢'
]
function ScrollNews (props) {
  const [list] = useState(()=> {
    return props.list || l
  })
  return <div className="wrap">
    <div className='test'>
      {
        list.map(item => <div key={item}>{item}</div>)
      }
    </div>
    <div className='test2'>
      {
        list.map(item => <div key={item}>{item}</div>)
      }
    </div>
    <div className='test3'>
      {
        list.map(item => <div key={item}>{item}</div>)
      }
    </div>
  </div>
}


export default ScrollNews