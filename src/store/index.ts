import { createStore, applyMiddleware, compose } from 'redux'
import { createMemoryHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import Reducer from '../reducers'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, Reducer)

let Store = history => {
  return createStore(connectRouter(history)(persistedReducer), compose(applyMiddleware(routerMiddleware(history))))
}

const history = createMemoryHistory()
const store = Store(history)
const persistor = persistStore(store)
const { dispatch, getState } = store

export { history, store, dispatch, getState, persistor }
