import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { toggleSidebar } from '../../../actions/App'
import { dispatch } from '../../../store/index'

interface HeaderProps {}

const styles = StyleSheet.create({
  container: {
    top: 35,
    position: 'absolute',
    borderRadius: 100,
    left: 25,
    right: 0,
    height: 40,
    width: '60%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#E9E9E9',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  active: {
    backgroundColor: '#A0EEEE',
    borderRadius: 100,
    elevation: 1,
    flex: 1,
    width: '33%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  inactive: {
    flex: 1,
    width: '33%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    borderRadius: 100,
    width: 50,
    height: 50,
    position: 'absolute',
    right: 25,
    top: -25,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 0.8,
    shadowRadius: 5
  },
  activeText: {
    flex: 1,
    width: '100%',
    lineHeight: 40,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4
  },
  text: {
    flex: 1,
    lineHeight: 40,
    color: '#B7B7B7',
    textShadowRadius: 1,
    fontWeight: 'bold'
  }
})

class Header extends React.Component<HeaderProps> {
  onClickMenuButton = () => {
    dispatch(toggleSidebar())
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
