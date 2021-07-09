import React, { useContext } from 'react'
import { appSetStateContent } from '../AppState'

const useAddToCart = () => {
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
  return addToCart
}

export default useAddToCart