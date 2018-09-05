import * as React from 'react'
import moment from 'moment'
import { DatePickerIOS, TouchableOpacity, Text } from 'react-native'
import { styles } from '../Style'

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
  render() {
    const { showDatePicker } = this.state
    const { onChangeText, date } = this.props
    return (
      <>
        <TouchableOpacity style={styles.inputText} activeOpacity={100} onPress={this.toggleDatePicker}>
          <Text style={styles.pickerContent}>{moment(date).format('YYYY-MM-DD')}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DatePickerIOS
            style={styles.contentPickerIOS }
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
