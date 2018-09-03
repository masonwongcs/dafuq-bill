import { TOGGLE_FOOTER } from '../actions/App'

export interface IAppState {
  showSidebar: boolean
}

const APP_STATE: IAppState = {
  showSidebar: false
}

function App(state = APP_STATE, action): IAppState {
  switch (action.type) {
    case TOGGLE_FOOTER: {
      state = Object.assign({}, state, { showSidebar: !state.showSidebar })
    }
  }
  return state
}

export default App
