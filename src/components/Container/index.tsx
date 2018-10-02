import React from 'react'
import { connect } from 'react-redux'
import { Animated, View } from 'react-native'
import Header from 'dafuq-bill/src/components/Public/Header'
import Content from 'dafuq-bill/src/components/List'
import Footer from 'dafuq-bill/src/components/Public/Footer'
import { BlurView, VibrancyView } from 'react-native-blur'
// import { BlurView } from 'expo'
import { IReducers } from 'dafuq-bill/src/reducers'

import bg from 'dafuq-bill/src/images/bg.png'

const AnimatedBlurView = Animated.createAnimatedComponent(View)

interface ConnectedProps {
  showFooter: boolean
}

interface ContainerProps extends ConnectedProps {}

interface ContainerState {
  intensity: Animated.AnimatedValue
  sideBar: boolean
  modalBlur: number
}

class Container extends React.Component<ContainerProps, ContainerState> {
  // readonly state = {
  //
  // }

  constructor(props) {
    super(props)
    this.state = {
      sideBar: false,
      modalBlur: 0,
      intensity: new Animated.Value(0)
    }

    this.animation = new Animated.Value(0)
    this.animation.addListener(value => {
      this.setState({ modalBlur: value.value })
    })
  }

  componentDidUpdate({ showFooter: prevShowFooter }: ContainerProps) {
    const { showFooter } = this.props
    if (prevShowFooter !== showFooter) {
      if (showFooter) {
        this.setState(
          {
            sideBar: true
          },
          () => {
            Animated.spring(this.animation, {
              friction: 30,
              toValue: 32
            }).start()
          }
        )
      } else {
        Animated.spring(this.animation, {
          friction: 30,
          toValue: 0
        }).start(() => {
          this.setState({
            sideBar: false
          })
        })
      }
    }
  }

  render() {
    const { showFooter } = this.props
    const { intensity, sideBar, modalBlur } = this.state
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {modalBlur >= 1 && (
            <BlurView
              blurType="light"
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                height: '100%',
                width: '100%',
                zIndex: 99
              }}
              blurAmount={this.state.modalBlur}
            />
          )}
          <Animated.Image
            style={{
              position: 'absolute',
              width: '100%',
              height: '25%',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
            source={bg}
          />
          {/*<Header />*/}
          {/*<Sidebar />*/}
          <Content />
        </View>
        <Footer />
      </View>
    )
  }
}

const mapStateToProps = ({ App: { showFooter } }: IReducers) => ({
  showFooter
})
export default connect(mapStateToProps)(Container)
