import React, { useContext } from 'react'
import { appSetStateContent } from '../AppState'
import { RobotProps } from './Robot'

const withAddToCart = (ChildComponent:React.ComponentType<RobotProps>) => {

  return (props:any) => {
    const setState = useContext(appSetStateContent)
    const addToCart = (id: number, name: string) => {
      if(setState) {
        setState(state => ({
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }]
          }
        }))
      }
    }
    return <ChildComponent {...props} addToCart={addToCart} />
  }
}

export default withAddToCart