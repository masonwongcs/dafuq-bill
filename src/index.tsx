import React from 'react'
import { Provider } from 'react-redux'
import { history, store } from 'store'
import { ConnectedRouter } from 'connected-react-router'
import Container from 'components/Public/Container'

interface AppProps {}

interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Container />
        </ConnectedRouter>
      </Provider>
    )
  }
}
