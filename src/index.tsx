import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { LocaleProvider } from 'antd-mobile-rn'
import enUS from 'antd-mobile-rn/lib/locale-provider/en_US'
import { Provider } from 'react-redux'
import { history, store, persistor } from './store'
import { ConnectedRouter } from 'connected-react-router'
import Container from './components/Container'

interface AppProps {}

interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <LocaleProvider locale={enUS}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ConnectedRouter history={history}>
              <Container />
            </ConnectedRouter>
          </PersistGate>
        </Provider>
      </LocaleProvider>
    )
  }
}
