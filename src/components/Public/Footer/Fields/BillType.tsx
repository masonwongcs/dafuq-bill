import * as React from 'react'
import { Picker, List } from 'antd-mobile-rn'
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from '../Style'
import { BILL_TYPE } from '../'

import typeIcon from 'images/type.png'

interface BillTypeProps {
  onChangeText: (value: string | Date, type: string) => void
  type: BILL_TYPE
}

interface BillTypeState {
  showPicker: boolean
}

class BillType extends React.Component<BillTypeProps, BillTypeState> {
  readonly state = {
    showPicker: false
  }
  showPicker = () => {
    this.setState({ showPicker: true })
  }
  hidePicker = () => {
    this.setState({ showPicker: false })
  }
  render() {
    const { showPicker } = this.state
    const { onChangeText, type } = this.props
    return (
      <View style={styles.antInputText}>
        <Image
          source={typeIcon}
          resizeMode="contain"
          style={{ width: 30, height: 30, position: 'absolute', top: 10, left: 10, zIndex: 1 }}
        />
        <List style={{ height: '100%', paddingLeft: 30 }}>
          <Picker
            cols={1}
            value={[type]}
            onChange={onChangeText.bind(null, 'type')}
            data={Object.entries(BILL_TYPE).reduce(
              (r, [key, index]) => (isNaN(Number(key)) ? r.concat({ label: key, value: index }) : r),
              []
            )}>
            <List.Item
              style={{
                bottom: 0,
                height: 50,
                paddingLeft: 30,
                borderBottomColor: '#fff'
              }}
              arrow="horizontal">
              Bill type
            </List.Item>
          </Picker>
        </List>
        {/*<TextInput*/}
        {/*caretHidden*/}
        {/*style={styles.inputText}*/}
        {/*value={BILL_TYPE[type]}*/}
        {/*onFocus={this.showPicker}*/}
        {/*onBlur={this.hidePicker}*/}
        {/*/>*/}
        {/*<TouchableOpacity style={styles.inputText} activeOpacity={100} onPress={this.showPicker}>*/}
        {/*<Text style={styles.pickerContent}>{BILL_TYPE[type]}</Text>*/}
        {/*</TouchableOpacity>*/}
        {/*{showPicker && (*/}
        {/*<Picker*/}
        {/*data={Object.entries(BILL_TYPE).reduce(*/}
        {/*(r, [key, index]) => (isNaN(Number(key)) ? r.concat({ label: key, value: index }) : r),*/}
        {/*[]*/}
        {/*)}*/}
        {/*/>*/}
        {/*)}*/}
      </View>
    )
  }
}

export default BillType
// <Picker style={styles.contentPickerIOS} onValueChange={onChangeText.bind(null, 'type')} selectedValue={type}>
//   {Object.entries(BILL_TYPE).reduce(
//     (r, [key, index]) =>
//       isNaN(Number(key)) ? r.concat(<Picker.Item key={index} label={key} value={index} />) : r,
//     []
//   )}
// </Picker>
