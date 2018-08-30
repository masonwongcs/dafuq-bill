import {combineReducers} from 'redux'
import App, {IAppState} from './App'

export interface IReducers {
  App: IAppState
}

const Reducer = combineReducers({App})

export default Reducer