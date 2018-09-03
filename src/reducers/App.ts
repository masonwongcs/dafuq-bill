import { HIDE_SIDEBAR, SHOW_SIDEBAR, TOGGLE_SIDEBAR } from '../actions/App'

export interface IAppState {
  showSidebar: boolean
}

const APP_STATE: IAppState = {
  showSidebar: false
}

function App(state = APP_STATE, action): IAppState {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      {
        state = Object.assign({}, state, { showSidebar: !state.showSidebar })
      }
      break
    case HIDE_SIDEBAR:
      {
        state = Object.assign({}, state, { showSidebar: false })
      }
      break

    case SHOW_SIDEBAR:
      {
        state = Object.assign({}, state, { showSidebar: true })
      }
      break
  }
  return state
}

export default App
