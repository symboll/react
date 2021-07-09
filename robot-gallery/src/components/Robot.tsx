import React, { useContext } from 'react'
import { appContext, appSetStateContent } from '../AppState'
import withAddToCart from './withAddToCart'
import styles from './Robot.module.css'


export interface RobotProps {
  id: number;
  name: string;
  email: string;
  addToCart: (id: number, name: string) => void;
}

const Robot: React.FC<RobotProps> = ({ id, name, email, addToCart }) => {
  const value = useContext(appContext)
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
      <h2>{ name }</h2>
      <p>{ email }</p>
      <div>作者: { value.username }</div>
      <button onClick={() => addToCart(id, name)}> 加入购物车</button>
    </div>
  )
}

export default withAddToCart(Robot)