import * as React from 'react'
import {
  Text,
  TextInput,
  View,
  Animated,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
  Keyboard,
  Image,
  ImageSourcePropType
} from 'react-native'
import { styles } from './Style'
import { toggleFooter, hideFooterAction, showFooterAction } from 'dafuq-bill/src/actions/App'
import { dispatch } from 'dafuq-bill/src/store'
import { IReducers } from 'dafuq-bill/src/reducers'
import { connect } from 'react-redux'
// import { LinearGradient } from 'expo'
import BillTitle from './Fields/BillTitle'
import BillType from './Fields/BillType'
import Amount from './Fields/Amount'
import DateCmp from './Fields/DateCmp'

import addIcon from 'dafuq-bill/src/images/add.png'

import { addItemToList } from 'dafuq-bill/src/actions/List'

export enum BILL_TYPE {
  'Credit Card',
  'Insurance'
}

interface ConnectedProps {
  showFooter: boolean
}
interface FooterProps extends ConnectedProps {}

interface FooterState {
  fadeAnim: Animated.AnimatedValue
  rotate: Animated.AnimatedValue
  footerActive: boolean
  form: {
    title: string
    type: BILL_TYPE
    date: Date
    amount: string
  }
}

class Footer extends React.Component<FooterProps, FooterState> {
  readonly state = {
    fadeAnim: new Animated.Value(50),
    rotate: new Animated.Value(0),
    footerActive: false,
    form: { title: undefined, type: BILL_TYPE['Credit Card'], date: new Date(), amount: undefined }
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
        Keyboard.dismiss()
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
  onChangeText = (type: string, value: string | Date | BILL_TYPE) => {
    this.setState({
      form: Object.assign({}, this.state.form, { [type]: value })
    })
  }
  onSubmit = () => {
    dispatch(addItemToList(this.state.form))
    dispatch(hideFooterAction())
    this.setState({ form: { title: undefined, type: BILL_TYPE['Credit Card'], date: new Date(), amount: undefined } })
  }
  render() {
    const {
      fadeAnim,
      rotate,
      form: { title, type, date, amount }
    } = this.state
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
          height: fadeAnim,
          backgroundColor: '#F2F2F2',
          borderTopStartRadius: 50,
          borderTopEndRadius: 50
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
        {/*<LinearGradient*/}
        {/*colors={['#A4EFF0', '#9AEBD7']}*/}
        {/*style={{*/}
        {/*position: 'absolute',*/}
        {/*top: 0,*/}
        {/*right: 0,*/}
        {/*bottom: 0,*/}
        {/*left: 0,*/}
        {/*height: '100%',*/}
        {/*width: '100%',*/}
        {/*zIndex: -1,*/}
        {/*borderTopLeftRadius: 30,*/}
        {/*borderTopRightRadius: 30,*/}
        {/*overflow: 'hidden'*/}
        {/*}}>*/}
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
        <BillTitle title={title} onChangeText={this.onChangeText} />
        <BillType type={type} onChangeText={this.onChangeText} />
        <Amount amount={amount} onChangeText={this.onChangeText} />

        <DateCmp date={date} onChangeText={this.onChangeText} />
        <TouchableOpacity style={styles.addButton} onPress={this.onSubmit}>
          <Text style={[styles.addButtonText, { fontWeight: 'bold' }]}>Add</Text>
        </TouchableOpacity>
        {/*</LinearGradient>*/}
      </Animated.View>
    )
  }
}

const mapStateToProps = ({ App: { showFooter } }: IReducers) => ({
  showFooter
})
export default connect(mapStateToProps)(Footer)
