import React, { useState } from 'react'

interface AppStateValue {
  username: string,
  shoppingCart: {
    items: {id: number, name: string} []
  }
}

const defaultContextValue: AppStateValue = {
  username: "阿莱克斯",
  shoppingCart: {
    items: []
  }
}

export const appContext = React.createContext(defaultContextValue)
export const appSetStateContent = React.createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined)

export const AppStateProvider: React.FC = (props) => {
  const [state, setState] = useState(defaultContextValue)
  return (
    <appContext.Provider value={state}>
      <appSetStateContent.Provider value={setState}>
        { props.children }
      </appSetStateContent.Provider>
    </appContext.Provider>
  )
}