import React from 'react'
import { LocaleProvider } from 'antd-mobile-rn'
import enUS from 'antd-mobile-rn/lib/locale-provider/en_US'
import { Provider } from 'react-redux'
import { history, store } from './store'
import { ConnectedRouter } from 'connected-react-router'
import Container from './components/Container'

interface AppProps {}

interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <LocaleProvider locale={enUS}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Container />
          </ConnectedRouter>
        </Provider>
      </LocaleProvider>
    )
  }
}
