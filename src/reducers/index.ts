import { combineReducers } from 'redux'
import App, { IAppState } from './App'
import List, { IListState } from './List'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

export interface IReducers {
  App: IAppState
  List: IListState
}

const Reducer = (history: History) => combineReducers({ App, List, router: connectRouter(history) })

export default Reducer
