import React from 'react'
import B from './components/B'
import C from './components/C'
import E from './components/E'
import F from './components/F'

function Hoc () {
  return (
    <div>
      <B 
        name={'zhangsan'} 
        age={18}
      />
      <div style={{ height:'100px' }}></div>
      <C 
        name={'lisi'}
        age={16}
      />
       <div style={{ height:'100px' }}></div>
      <E />
      <F />
    </div>
  )
}

export default Hoc;

// 代理方式  高阶组件
  // 返回的新组件类直接继承自 React.Component 类。新组件扮演的角色：传入参数组件的一个代理。
  // 在新组件的render函数中，将被包裹组件渲染出来，除了高阶组件自己要做的工作。其余功能全部转手给了被包裹组件。   
  // 1. 操纵props
  // 2. 访问ref
  // 3. 抽取状态
  // 4. 包装组件

  // export default () => WrappedComponent => class A extends React.Component{
  //   render () {
  //     const { ...otherProps } = this.props
  //     return <WrappedComponent {...otherProps} />
  //   }
  // }

// 继承方式  高阶组件
  // 采用继承关联作为参数的组件和返回的组件，假如传入的组件参数是WrappedComponent，那么返回的组件就直接继承自WrappedComponent。
  // 1. 操纵props
  // 2. 操纵生命周期

  // export default ()=> WrappedComponent => class A extends WrappedComponent {
  //   render () {
  //     const {user, ...otherProps} = this.props
  //     this.props = otherProps
  //     return super.render()
  //   }
  // }