import * as React from 'react'
import { ScrollView, View, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import { styles } from './Style'

interface HeaderProps {}

class Content extends React.Component<HeaderProps> {
  render() {
    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        onScroll={event => {
          console.log((event as NativeSyntheticEvent<NativeScrollEvent>).nativeEvent.contentOffset.y)
        }}>
        <View
          style={[
            styles.item,
            {
              marginTop: 90
            }
          ]}
        />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View
          style={[
            styles.item,
            {
              marginBottom: 80
            }
          ]}
        />
      </ScrollView>
    )
  }
}

export default Content
