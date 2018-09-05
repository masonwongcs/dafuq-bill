import * as React from 'react'
import moment from 'moment'
import { DatePickerIOS, TouchableOpacity, Text, TextInput } from 'react-native'
import { styles } from '../Style'
import { BILL_TYPE } from '../index'

interface DateProps {
  onChangeText: (value: string | Date, type: string) => void
  date: Date
}

interface DateState {
  showDatePicker: boolean
}

class DateCmp extends React.Component<DateProps, DateState> {
  readonly state = {
    showDatePicker: false
  }
  toggleDatePicker = () => {
    this.setState({ showDatePicker: !this.state.showDatePicker })
  }
  showDatePicker = () => {
    this.setState({ showDatePicker: true })
  }
  hideDatePicker = () => {
    this.setState({ showDatePicker: false })
  }
  render() {
    const { showDatePicker } = this.state
    const { onChangeText, date } = this.props
    return (
      <>
        <TextInput
          caretHidden
          style={styles.inputText}
          value={moment(date).format('YYYY-MM-DD')}
          onFocus={this.showDatePicker}
          onBlur={this.hideDatePicker}
        />
        {showDatePicker && (
          <DatePickerIOS
            style={styles.contentPickerIOS}
            mode="date"
            date={date}
            onDateChange={onChangeText.bind(null, 'date')}
          />
        )}
      </>
    )
  }
}

export default DateCmp
