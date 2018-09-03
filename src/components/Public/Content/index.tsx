import * as React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'

interface HeaderProps {}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  item: {
    width: '90%',
    height: 70,
    borderRadius: 6,
    backgroundColor: '#fff',
    shadowColor: '#424242',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 5,
    shadowOpacity: 0.2
  }
})

class Content extends React.Component<HeaderProps> {
  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
