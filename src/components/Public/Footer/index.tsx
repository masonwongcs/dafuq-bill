import * as React from 'react'
import {
  Text,
  TextInput,
  Button,
  View,
  Animated,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent
} from 'react-native'
import {styles} from './Style'
import { toggleFooter, hideFooterAction, showFooterAction } from '../../../actions/App'
import { dispatch } from '../../../store/index'
import { IReducers } from '../../../reducers'
import { connect } from 'react-redux'

interface ConnectedProps {
  showFooter: boolean
}
interface FooterProps extends ConnectedProps {}

interface SidebarState {
  fadeAnim: Animated.AnimatedValue
}


class Footer extends React.Component<FooterProps> {
  readonly state = {
    fadeAnim: new Animated.Value(50),
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
      } else {
        Animated.spring(this.state.fadeAnim, {
          toValue: 50,
          friction: 30
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
    if (height > 50) {
      dispatch(showFooterAction())
    }
    if (height < -50) {
      dispatch(hideFooterAction())
      outerHeight = 50
    }
    // if (showFooter) {
    //   Animated.spring(this.state.fadeAnim, {
    //     toValue: outerHeight,
    //     friction: 30
    //   }).start()
    // }
    // else {
    //   Animated.spring(this.state.fadeAnim, {
    //     toValue: 30 + height * 5,
    //     friction: 30
    //   }).start()
    // }
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
          onScroll={(evt) => this.updateFooterHeight((evt as NativeSyntheticEvent<NativeScrollEvent>).nativeEvent.contentOffset.y)}
        />
        <Text style={styles.title}>Create new bill</Text>
        <TextInput editable={true} style={[styles.inputText, { marginTop: 20 }]} maxLength={40} />
        <TextInput editable={true} style={styles.inputText} maxLength={40} />
        <TextInput editable={true} style={styles.inputText} maxLength={40} />
        <TextInput editable={true} style={styles.inputText} maxLength={40} />
        <View style={styles.addButton}>
          <Button title="Add" color="#fff" onPress={() => null} />
        </View>
      </Animated.View>
    )
  }
}

const mapStateToProps = ({ App: { showFooter } }: IReducers) => ({
  showFooter
})
export default connect(mapStateToProps)(Footer)
