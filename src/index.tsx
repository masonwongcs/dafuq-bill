import React from 'react'
import { Provider } from 'react-redux'
import { history, store } from './store'
import { Animated, FlatList, StyleSheet, Text, View } from 'react-native'
import Header from './components/Public/Header'
import Sidebar from './components/Public/Sidebar'
import { ConnectedRouter } from 'connected-react-router'

interface AppProps {}

interface AppState {
  fadeAnim: Animated.AnimatedValue
  sideBar: boolean
}

export default class App extends React.Component<AppProps, AppState> {
  readonly state = {
    fadeAnim: new Animated.Value(-400),
    sideBar: false
  }

  toggleSideBar = () => {
    const { sideBar } = this.state

    if (sideBar) {
      Animated.timing(this.state.fadeAnim, {
        toValue: -400,
        duration: 500
      }).start()
    } else {
      Animated.timing(this.state.fadeAnim, {
        toValue: 0,
        duration: 500
      }).start()
    }
    this.setState({
      sideBar: !sideBar
    })
  }

  render() {
    const { sideBar, fadeAnim } = this.state

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <View style={{ flex: 1, marginTop: 20 }}>
            <Header />
            <Sidebar />
          </View>
        </ConnectedRouter>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
