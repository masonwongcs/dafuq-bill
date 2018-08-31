import * as React from 'react'
import { ScrollView, Button, Text, View, StyleSheet, Animated } from 'react-native'
import { toggleSidebar } from '../../../actions/App'
import { dispatch } from '../../../store/index'
import { IReducers } from '../../../reducers'
import { connect } from 'react-redux'

interface ConnectedProps {
  showSidebar: boolean
}
interface FooterProps extends ConnectedProps {}

interface SidebarState {
  fadeAnim: Animated.AnimatedValue
}
const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    flex: 1,
    backgroundColor: '#7DF0E4',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex: 2
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
  }
})

class Content extends React.Component<FooterProps> {
  readonly state = {
    fadeAnim: new Animated.Value(40),
    footerActive: false
  }
  onClickMenuButton = () => {
    dispatch(toggleSidebar())
    this.setState({
      footerActive: !this.state.footerActive
    })
  }

  componentDidUpdate({ showSidebar: prevShowSidebar }: FooterProps) {
    const { showSidebar } = this.props
    if (prevShowSidebar !== showSidebar) {
      if (showSidebar) {
        Animated.spring(this.state.fadeAnim, {
          toValue: 600,
          friction: 30
        }).start()
      } else {
        Animated.spring(this.state.fadeAnim, {
          toValue: 40,
          friction: 30
        }).start()
      }
    }
  }
  render() {
    const { fadeAnim, footerActive } = this.state
    return (
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: fadeAnim,
          backgroundColor: '#7DF0E4',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30
        }}>
        <View>
          <View style={styles.button}>
            <Button title="Add" color="#fff" onPress={this.onClickMenuButton} />
          </View>
        </View>
      </Animated.View>
    )
  }
}

const mapStateToProps = ({ App: { showSidebar } }: IReducers) => ({
  showSidebar
})
export default connect<ConnectedProps>(mapStateToProps)(Content)
