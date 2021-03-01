import * as React from 'react'
import { View, Text, Image, ImageSourcePropType } from 'react-native'
import { styles } from './Style'
import { toggleFooter } from 'dafuq-bill/src/actions/App'
import { dispatch } from 'dafuq-bill/src/store'
import Icon from 'dafuq-bill/src/images/label.png'

interface HeaderProps {}

class Header extends React.Component<HeaderProps> {
  onClickMenuButton = () => {
    dispatch(toggleFooter())
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.active}>
          <Image style={{ top: 25, width: 40, height: 40 }} source={Icon as ImageSourcePropType} />
          <Text style={styles.activeText}>Pending</Text>
        </View>
        <View style={styles.inactive}>
          <Image style={{ top: 25, width: 40, height: 40 }} source={Icon as ImageSourcePropType} />
          <Text style={styles.text}>Paid</Text>
        </View>
        <View style={styles.inactive}>
          <Image style={{ top: 25, width: 40, height: 40 }} source={Icon as ImageSourcePropType} />
          <Text style={styles.text}>All</Text>
        </View>
      </View>
    )
  }
}

export default Header
