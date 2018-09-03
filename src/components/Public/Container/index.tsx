import React from 'react'
import { connect, Provider } from 'react-redux'
import { history, store } from '../../../store'
import { Animated, FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Content from '../Content'
import Footer from '../Footer'
import { BlurView } from 'expo'
import { IReducers } from '../../../reducers'

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView)

interface ConnectedProps {
  showSidebar: boolean
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

  componentDidUpdate({ showSidebar: prevShowSidebar }: ContainerProps) {
    const { showSidebar } = this.props
    if (prevShowSidebar !== showSidebar) {
      if (showSidebar) {
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
        }).start(()=>{
            this.setState({
                sideBar: false
            })
        })
      }
    }
  }

  render() {
    const { showSidebar } = this.props
    const { intensity, sideBar } = this.state
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
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

const mapStateToProps = ({ App: { showSidebar } }: IReducers) => ({
  showSidebar
})
export default connect<ConnectedProps>(mapStateToProps)(Container)
