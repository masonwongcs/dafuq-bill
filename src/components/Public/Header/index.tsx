import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { toggleSidebar } from '../../../actions/App'
import { dispatch } from '../../../store/index'

interface HeaderProps {}

class Header extends React.Component<HeaderProps> {
  onClickMenuButton = () => {
    dispatch(toggleSidebar())
  }
  render() {
    return (
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
          <Text>DAFUQ</Text>
        </View>
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }}>
          <Button onPress={this.onClickMenuButton} title="Menu" />
        </View>
      </View>
    )
  }
}

export default Header
