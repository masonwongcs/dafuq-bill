import React from 'react'
import { connect } from 'react-redux'
import { Animated, View } from 'react-native'
import Header from 'components/Public/Header'
import Content from 'components/List'
import Footer from 'components/Public/Footer'
import { BlurView } from 'expo'
import { IReducers } from 'reducers'

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView)

interface ConnectedProps {
  showFooter: boolean
}

interface ContainerProps extends ConnectedProps {}

interface ContainerState {
  intensity: Animated.AnimatedValue
  sideBar: boolean
}

class Container extends React.Component<ContainerProps, ContainerState> {
  readonly state = {
    sideBar: false,
    intensity: new Animated.Value(0)
  }

  componentDidUpdate({ showFooter: prevShowFooter }: ContainerProps) {
    const { showFooter } = this.props
    if (prevShowFooter !== showFooter) {
      if (showFooter) {
        this.setState({
          sideBar: true
        })
        Animated.spring(this.state.intensity, {
          toValue: 100,
          friction: 30
        }).start()
      } else {
        Animated.spring(this.state.intensity, {
          toValue: 0,
          friction: 30
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
    const { intensity, sideBar } = this.state
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {sideBar && (
            <AnimatedBlurView
              tint="default"
              intensity={intensity}
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
            />
          )}
          <Header />
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
