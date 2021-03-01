import * as React from 'react'
import { format } from 'date-fns'
import {
  ScrollView,
  View,
  Text,
  Image,
  ImageSourcePropType,
  ImageStyle,
  Animated,
  Dimensions,
  Platform
} from 'react-native'
import { styles } from './Style'
import { IReducers } from 'dafuq-bill/src/reducers'
import { connect } from 'react-redux'
import { IList } from 'dafuq-bill/src/reducers/List'
import Header from 'dafuq-bill/src/components/Public/Header'
import { BILL_TYPE } from 'dafuq-bill/src/components/Public/Footer'
import noItemImage from 'dafuq-bill/src/images/no-bills.png'
interface HeaderProps {
  list: IList[]
}

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const IMAGE_HEIGHT = 250
const HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 50
const SCROLL_HEIGHT = IMAGE_HEIGHT - HEADER_HEIGHT
const THEME_COLOR = 'rgba(85,186,255, 1)'
const FADED_THEME_COLOR = 'rgba(85,186,255, 0.8)'

class Content extends React.Component<HeaderProps> {
  nScroll = new Animated.Value(0)
  scroll = new Animated.Value(0)
  textColor = this.scroll.interpolate({
    inputRange: [0, SCROLL_HEIGHT / 5, SCROLL_HEIGHT],
    outputRange: [THEME_COLOR, FADED_THEME_COLOR, 'white'],
    extrapolate: 'clamp'
  })
  tabBg = this.scroll.interpolate({
    inputRange: [0, SCROLL_HEIGHT],
    outputRange: ['white', THEME_COLOR],
    extrapolate: 'clamp'
  })
  tabY = this.nScroll.interpolate({
    inputRange: [0, SCROLL_HEIGHT, SCROLL_HEIGHT + 1],
    outputRange: [0, 0, 1]
  })
  headerBg = this.scroll.interpolate({
    inputRange: [0, SCROLL_HEIGHT, SCROLL_HEIGHT + 1],
    outputRange: ['transparent', 'transparent', THEME_COLOR],
    extrapolate: 'clamp'
  })
  imgScale = this.nScroll.interpolate({
    inputRange: [-25, 0],
    outputRange: [1.1, 1],
    extrapolateRight: 'clamp'
  })
  imgOpacity = this.nScroll.interpolate({
    inputRange: [0, SCROLL_HEIGHT],
    outputRange: [1, 0]
  })
  heights = [500, 500]
  state = {
    activeTab: 0,
    height: 500
  }

  constructor(props) {
    super(props)
    this.nScroll.addListener(Animated.event([{ value: this.scroll }], { useNativeDriver: false }))
  }

  render() {
    const { list } = this.props
    const lastIndex = list.length - 1
    return (
      <Animated.ScrollView
        scrollEventThrottle={5}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.nScroll } } }], { useNativeDriver: true })}
        style={styles.container}
        showsVerticalScrollIndicator={false}>
        <Animated.View
          style={{
            transform: [{ translateY: Animated.multiply(this.nScroll, 0.65) }, { scale: this.imgScale }]
          }}>
          <Header />
        </Animated.View>

        {list.length === 0 ? (
          <Image
            style={styles.noItemImage as ImageStyle}
            source={noItemImage as ImageSourcePropType}
            resizeMode="contain"
          />
        ) : (
          list.map((item, index) => (
            <View
              key={index}
              style={[
                styles.item,
                index === 0
                  ? { marginTop: 90 }
                  : index === lastIndex
                    ? {
                        marginBottom: 80
                      }
                    : undefined
              ]}>
              <Text>{item.title}</Text>
              <Text>{format(item.date, 'YYYY-MM-DD')}</Text>
              <Text>{BILL_TYPE[item.type]}</Text>
              <Text>{item.amount}</Text>
            </View>
          ))
        )}
      </Animated.ScrollView>
    )
  }
}

const mapStateToProps = ({ List: { list } }: IReducers) => ({ list })

export default connect(mapStateToProps)(Content)
