import {createStore, applyMiddleware, compose} from 'redux'
import { createMemoryHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'

import Reducer from '../reducers'

let Store = history=>{
  return createStore(connectRouter(history)(Reducer), compose(applyMiddleware(routerMiddleware(history))))
}

const history = createMemoryHistory()
const store = Store(history)
const { dispatch, getState} = store

export {history, store, dispatch, getState}