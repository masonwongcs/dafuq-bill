import * as React from 'react'
import { View, Text } from 'react-native'
import { styles } from './Style'
import { toggleFooter } from 'actions/App'
import { dispatch } from 'store'

interface HeaderProps {}

class Header extends React.Component<HeaderProps> {
  onClickMenuButton = () => {
    dispatch(toggleFooter())
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.active}>
          <Text style={styles.activeText}>Pending</Text>
        </View>
        <View style={styles.inactive}>
          <Text style={styles.text}>Paid</Text>
        </View>
        <View style={styles.inactive}>
          <Text style={styles.text}>All</Text>
        </View>
      </View>
    )
  }
}

export default Header
