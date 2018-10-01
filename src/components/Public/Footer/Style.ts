import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    flex: 1,
    backgroundColor: '#7DF0E4',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex: 99
  },
  button: {
    borderRadius: 100,
    width: 50,
    height: 50,
    position: 'absolute',
    alignSelf: 'center',
    top: -25,
    backgroundColor: '#75EFD9',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    zIndex: 99
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    width: '90%',
    marginBottom: 20,
    marginTop: 40,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  inputText: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    height: 50,
    width: '90%',
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2
    },
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 20,
    paddingRight: 20
  },
  antInputText: {
    backgroundColor: '#fff',
    height: 50,
    width: '90%',
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2
    },
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'hidden'
  },
  pickerContent: {
    height: 50,
    lineHeight: 50,
    textAlign: 'left',
    paddingRight: 20,
    fontWeight: 'bold',
    paddingLeft: 35
  },
  addButton: {
    height: 50,
    width: '90%',
    borderRadius: 100,
    backgroundColor: '#90BEDE',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 40
  },
  addButtonText: {
    lineHeight: 50,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
  contentPickerIOS: {
    zIndex: 1,
    backgroundColor: '#fff',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: -2
    }
  }
})
