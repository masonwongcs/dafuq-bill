import * as React from 'react'
import moment from 'moment'
import { DatePicker, List } from 'antd-mobile-rn'
import { Text, View } from 'react-native'
import { styles } from '../Style'

interface DateProps {
  onChangeText: (value: string | Date, type: string) => void
  date: Date
}

class DateCmp extends React.Component<DateProps> {
  render() {
    const { onChangeText, date } = this.props
    return (
      <View style={[styles.inputText, { paddingLeft: 0, paddingRight: 0 }]}>
        <List>
          <DatePicker mode="date" value={date} onChange={onChangeText.bind(null, 'date')} format={() => ' '}>
            <List.Item arrow="horizontal" extra={null} style={{ width: '100%', height: '100%' }}>
              <Text style={styles.pickerContent}>{moment(date).format('YYYY-MM-DD')}</Text>
            </List.Item>
          </DatePicker>
        </List>
      </View>
    )
  }
}

export default DateCmp
