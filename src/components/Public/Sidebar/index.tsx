import * as React from 'react'
import { connect } from 'react-redux'
import { Animated, FlatList, Text } from 'react-native'
import { IReducers } from '../../../reducers'

interface ConnectedProps {
  showSidebar: boolean
}
interface SidebarProps extends ConnectedProps {}

interface SidebarState {
  fadeAnim: Animated.AnimatedValue
}

class Sidebar extends React.Component<SidebarProps, SidebarState> {
  readonly state = {
    fadeAnim: new Animated.Value(-400)
  }
  componentDidUpdate({ showSidebar: prevShowSidebar }: SidebarProps) {
    const { showSidebar } = this.props
    if (prevShowSidebar !== showSidebar) {
      if (showSidebar) {
        Animated.spring(this.state.fadeAnim, {
          toValue: -400,
          friction: 50
        }).start()
      } else {
        Animated.spring(this.state.fadeAnim, {
          toValue: 0,
          friction: 50
        }).start()
      }
    }
  }
  render() {
    const { fadeAnim } = this.state
    return (
      <Animated.View
        style={{
          height: '100%',
          width: '50%',
          backgroundColor: '#3498db',
          position: 'absolute',
          left: fadeAnim,
          top: 0
        }}>
        <FlatList
          style={{ flex: 3, flexDirection: 'row' }}
          data={[
            { key: 'Devin' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' }
          ]}
          renderItem={({ item }) => <Text style={{ height: 40, padding: 10 }}>{item.key}</Text>}
        />
      </Animated.View>
    )
  }
}

const mapStateToProps = ({ App: { showSidebar } }: IReducers) => ({
  showSidebar
})
export default connect(mapStateToProps)(Sidebar)
