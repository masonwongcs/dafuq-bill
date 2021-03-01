import { HIDE_FOOTER, SHOW_FOOTER, TOGGLE_FOOTER } from 'dafuq-bill/src/actions/App'

export interface IAppState {
  showFooter: boolean
}

const APP_STATE: IAppState = {
  showFooter: false
}

function App(state = APP_STATE, action): IAppState {
  switch (action.type) {
    case TOGGLE_FOOTER: {
      state = Object.assign({}, state, { showFooter: !state.showFooter })
      break
    }
    case HIDE_FOOTER:
      {
        state = Object.assign({}, state, { showFooter: false })
      }
      break

    case SHOW_FOOTER:
      {
        state = Object.assign({}, state, { showFooter: true })
      }
      break
  }
  return state
}

export default App
