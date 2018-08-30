import React from 'react'
import { StyleSheet, Text, View, Button, Alert, FlatList, Animated } from 'react-native'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(-400),
      sideBar: false
    }
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
      <View style={{ flex: 1, marginTop: 20 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'powderblue',
              flexGrow: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text>Something</Text>
          </View>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'skyblue',
              bottom: 0,
              left: 0,
              opacity: 0.2
            }}
          />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }}>
            <Button
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onPress={this.toggleSideBar}
              title="Menu"
            />
          </View>
        </View>

        <Animated.View
          style={{
            height: '100%',
            width: '50%',
            backgroundColor: '#3498db',
            position: 'absolute',
            left: fadeAnim,
            top: 0
          }}>
          <FlatList
            style={{ flex: 3, flexDirection: 'row' }}
            data={[
              { key: 'Devin' },
              { key: 'Jackson' },
              { key: 'James' },
              { key: 'Joel' },
              { key: 'John' },
              { key: 'Jillian' },
              { key: 'Jimmy' },
              { key: 'Julie' }
            ]}
            renderItem={({ item }) => <Text style={{ height: 40, padding: 10 }}>{item.key}</Text>}
          />
        </Animated.View>
      </View>
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
