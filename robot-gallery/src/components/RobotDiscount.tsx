import React, { useContext } from 'react'
import { appContext, appSetStateContent } from '../AppState'
import useAddToCart from './useAddToCart'
import styles from './Robot.module.css'


interface RobotProps {
  id: number;
  name: string;
  email: string
}

const RobotDiscount: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext)
  const addToCart = useAddToCart()
  // const setState = useContext(appSetStateContent)
  // const addToCart = () => {
  //   if(setState) {
  //     setState(state => ({
  //       ...state,
  //       shoppingCart: {
  //         items: [...state.shoppingCart.items, { id, name }]
  //       }
  //     }))
  //   }
  // }
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <div>打折商品</div>
      <h2>{ name }</h2>
      <p>{ email }</p>
      <div>作者: { value.username }</div>
      <button onClick={ () => addToCart(id, name) }> 加入购物车</button>
    </div>
  )
}

export default RobotDiscount