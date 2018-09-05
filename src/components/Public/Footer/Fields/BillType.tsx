import * as React from 'react'
import { Picker, List } from 'antd-mobile-rn'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { styles } from '../Style'
import { BILL_TYPE } from '../'

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
      <View style={styles.inputText}>
        <List>
          <Picker
            cols={1}
            value={[type]}
            onChange={onChangeText.bind(null, 'type')}
            data={Object.entries(BILL_TYPE).reduce(
              (r, [key, index]) => (isNaN(Number(key)) ? r.concat({ label: key, value: index }) : r),
              []
            )}>
            <List.Item arrow="horizontal">Choose a bill type</List.Item>
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
