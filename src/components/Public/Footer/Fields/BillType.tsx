import * as React from 'react'
import { View, Text } from 'react-native'
import { Picker, List } from 'antd-mobile-rn'
import { styles } from '../Style'
import { BILL_TYPE } from '../'

interface BillTypeProps {
  onChangeText: (type: string, value: BILL_TYPE) => void
  type: BILL_TYPE
}

interface BillTypeState {}

class BillType extends React.Component<BillTypeProps, BillTypeState> {
  render() {
    const { onChangeText, type } = this.props
    const options: { label: string; value: string }[] = Object.entries(BILL_TYPE).reduce(
      (r, [key, index]) => (isNaN(Number(key)) ? r.concat({ label: key, value: index.toString() }) : r),
      []
    )
    return (
      <View style={[styles.inputText, { paddingLeft: 0, paddingRight: 0 }]}>
        <List>
          <Picker
            cols={1}
            value={[type.toString()]}
            onChange={(value: string[]) => {
              onChangeText('type', Number(value[0]))
            }}
            format={() => ' '}
            data={options}>
            <List.Item arrow="horizontal" extra={null} style={{ width: '100%', height: '100%' }}>
              <Text style={styles.pickerContent}>{options.find(option => option.value === type.toString()).label}</Text>
            </List.Item>
          </Picker>
        </List>
      </View>
    )
  }
}

export default BillType
