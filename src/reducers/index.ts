import { combineReducers } from 'redux'
import App, { IAppState } from './App'
import List, { IListState } from './List'

export interface IReducers {
  App: IAppState
  List: IListState
}

const Reducer = combineReducers({ App, List })

export default Reducer
