import React, { Component, useContext, useState } from 'react'
import styles from './ShoppingCart.module.css'
import { FiShoppingCart }  from 'react-icons/fi'
import { appContext, appSetStateContent } from '../AppState'


interface Props {}
interface State {
  isOpen: boolean
}

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const appState = useContext(appContext)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={styles.cartContainer}>
      <button className={styles.button} onClick={ handleClick }>
        <FiShoppingCart />
        <span>购物车{appState.shoppingCart.items.length}(件)</span>  
      </button>
      <div className={styles.cartDropDown}
        style={{ display: isOpen? 'block': 'none' }}
      >
        <ul>
          {
            appState.shoppingCart.items.map(item => {
              return <li key={item.id}>{item.name}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}
// class ShoppingCart extends Component<Props, State> {

//   constructor(props: Props) {
//     super(props)
//     this.state = {
//       isOpen: false
//     }
//   }
//   handleClick = (e: React.MouseEvent<HTMLButtonElement,MouseEvent>) => {
//     console.log('target', e.target)
//     console.log('currentTarget', e.currentTarget)
//     if((e.target as HTMLElement).nodeName === 'SPAN') {
//       console.log('===>>>')
//     }
//     this.setState({
//       isOpen: !this.state.isOpen
//     })
//   }
//   render () {
//     const { isOpen } = this.state
//     return (
//       <div className={styles.cartContainer}>
//         <button className={styles.button} onClick={ this.handleClick}>
//           <FiShoppingCart />
//           <span>购物车 2 (件)</span>  
//         </button>
//         <div className={styles.cartDropDown}
//           style={{ display: isOpen? 'block': 'none' }}
//         >
//           <ul>
//             <li>robot 1</li>
//             <li>robot 2</li>
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }

export default ShoppingCart