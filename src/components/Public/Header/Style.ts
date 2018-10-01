import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    top: '15%',
    position: 'absolute',
    borderRadius: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
    left: '5%',
    height: 110,
    width: '90%',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  active: {
    color: '#A0EEEE',
    width: '33%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inactive: {
    width: '33%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    borderRadius: 100,
    width: 50,
    height: 50,
    position: 'absolute',
    right: 25,
    top: -25,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 0.8,
    shadowRadius: 5
  },
  activeText: {
    marginTop: 25,
    flex: 1,
    width: '100%',
    lineHeight: 40,
    color: '#A0EEEE',
    fontWeight: 'bold',
    textAlign: 'center',
    // textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4
  },
  text: {
    marginTop: 25,
    flex: 1,
    lineHeight: 40,
    color: '#B7B7B7',
    textShadowRadius: 1,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
