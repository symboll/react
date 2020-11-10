import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as HomeReducer} from '@/common/Home/store'
import { reducer as LoginReducer} from '@/common/Login/store'
import { reducer as HeaderReducer} from '@/common/components/Header/store'
import { clientAxios, serverAxios } from '../lib/axios'

const reducer = combineReducers({
  header: HeaderReducer,
  home: HomeReducer,
  login: LoginReducer
})

export const getStore = () => {
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverAxios))
  )
}

export const getClientStore = () => {
  const defaultStore = window.context.state
  return createStore(
    reducer, 
    defaultStore,
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  )
}