import * as React from 'react'
import moment from 'moment'
import { DatePicker, List } from 'antd-mobile-rn'
import { Image, ImageSourcePropType, Text, View } from 'react-native'
import { styles } from '../Style'
import Icon from 'images/time.png'

interface DateProps {
  onChangeText: (value: string | Date, type: string) => void
  date: Date
}

const DateCmp: React.SFC<DateProps> = ({ onChangeText, date }) => (
  <View style={[styles.inputText, { paddingLeft: 0, paddingRight: 0 }]}>
    <Image
      source={Icon as ImageSourcePropType}
      resizeMode="contain"
      style={{ width: 30, height: 30, position: 'absolute', top: 10, left: 10, zIndex: 1 }}
    />
    <List>
      <DatePicker mode="date" value={date} onChange={onChangeText.bind(null, 'date')} format={() => ' '}>
        <List.Item arrow="horizontal" extra={null} style={{ width: '100%', height: '100%' }}>
          <Text style={styles.pickerContent}>{moment(date).format('YYYY-MM-DD')}</Text>
        </List.Item>
      </DatePicker>
    </List>
  </View>
)

export default DateCmp
