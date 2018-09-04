import * as React from 'react'
import {
  Text,
  TextInput,
  Image,
  View,
  Animated,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity
} from 'react-native'
import { styles } from './Style'
import { toggleFooter, hideFooterAction, showFooterAction } from 'actions/App'
import { dispatch } from 'store'
import { IReducers } from 'reducers'
import { connect } from 'react-redux'
import { LinearGradient } from 'expo'

const addIcon = require('../../Image/add.png')

interface ConnectedProps {
  showFooter: boolean
}
interface FooterProps extends ConnectedProps {}

interface SidebarState {
  fadeAnim: Animated.AnimatedValue
  rotate: Animated.AnimatedValue
  footerActive: boolean
}

class Footer extends React.Component<FooterProps> {
  readonly state = {
    fadeAnim: new Animated.Value(50),
    rotate: new Animated.Value(0),
    footerActive: false
  }

  onClickMenuButton = () => {
    dispatch(toggleFooter())
    this.setState({
      footerActive: !this.state.footerActive
    })
  }

  componentDidUpdate({ showFooter: prevShowFooter }: FooterProps) {
    const { showFooter } = this.props
    if (prevShowFooter !== showFooter) {
      if (showFooter) {
        Animated.spring(this.state.fadeAnim, {
          toValue: 600,
          friction: 30
        }).start()
        Animated.timing(this.state.rotate, {
          toValue: 1,
          duration: 400
        }).start()
      } else {
        Animated.spring(this.state.fadeAnim, {
          toValue: 50,
          friction: 30
        }).start()
        Animated.timing(this.state.rotate, {
          toValue: 0,
          duration: 400
        }).start()
      }
    }
  }

  updateFooterHeight = height => {
    const { showFooter } = this.props
    let outerHeight = 600
    if (height <= 0) {
      outerHeight = 600 + height * 10
    }

    console.log(height)
    if (height > 20) {
      dispatch(showFooterAction())
    }
    if (height < -50) {
      dispatch(hideFooterAction())
      outerHeight = 50
    }
    // if (showFooter) {
    //   Animated.spring(this.state.fadeAnim, {
    //     toValue: 600,
    //     friction: 30
    //   }).start()
    // }
    // else {
    //   Animated.spring(this.state.fadeAnim, {
    //     toValue: 30 + height * 10,
    //     friction: 30
    //   }).start()
    // }
  }
  render() {
    const { fadeAnim, rotate, footerActive } = this.state
    const spin = rotate.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-45deg']
    })
    return (
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: fadeAnim
        }}>
        <View>
          <TouchableOpacity style={styles.button} onPress={this.onClickMenuButton} activeOpacity={1}>
            <Animated.Image
              style={{
                width: 30,
                height: 30,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 10,
                transform: [{ rotate: spin }]
              }}
              source={addIcon}
            />
          </TouchableOpacity>
        </View>
        <LinearGradient
          colors={['#A4EFF0', '#9AEBD7']}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: -1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            overflow: 'hidden'
          }}>
          <ScrollView
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              height: '100%',
              width: '100%',
              zIndex: -1
            }}
            scrollEventThrottle={16}
            onScroll={evt =>
              this.updateFooterHeight((evt as NativeSyntheticEvent<NativeScrollEvent>).nativeEvent.contentOffset.y)
            }
          />
          <Text style={styles.title}>Create new bill</Text>
          <TextInput editable={true} style={[styles.inputText, { marginTop: 20 }]} maxLength={40} />
          <TextInput editable={true} style={styles.inputText} maxLength={40} />
          <TextInput editable={true} style={styles.inputText} maxLength={40} />
          <TextInput editable={true} style={styles.inputText} maxLength={40} />
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </LinearGradient>
      </Animated.View>
    )
  }
}

const mapStateToProps = ({ App: { showFooter } }: IReducers) => ({
  showFooter
})
export default connect(mapStateToProps)(Footer)
