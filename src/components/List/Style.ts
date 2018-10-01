import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
  },
  noItemImage: {
    marginTop: '20%',
    width: '40%',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})
