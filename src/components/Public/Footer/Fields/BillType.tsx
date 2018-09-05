import * as React from 'react'
import { Picker, TouchableOpacity, Text } from 'react-native'
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
  togglePicker = () => {
    this.setState({ showPicker: !this.state.showPicker })
  }
  render() {
    const { showPicker } = this.state
    const { onChangeText, type } = this.props
    console.log(type)
    return (
      <>
        <TouchableOpacity style={styles.inputText} activeOpacity={100} onPress={this.togglePicker}>
          <Text style={styles.pickerContent}>{BILL_TYPE[type]}</Text>
        </TouchableOpacity>
        {showPicker && (
          <Picker style={styles.contentPickerIOS} onValueChange={onChangeText.bind(null, 'type')} selectedValue={type}>
            {Object.entries(BILL_TYPE).reduce(
              (r, [key, index]) =>
                isNaN(Number(key)) ? r.concat(<Picker.Item key={index} label={key} value={index} />) : r,
              []
            )}
          </Picker>
        )}
      </>
    )
  }
}

export default BillType
