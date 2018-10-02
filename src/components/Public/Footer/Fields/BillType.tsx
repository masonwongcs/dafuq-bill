import * as React from 'react'
import { Image, ImageSourcePropType, Text, View } from 'react-native'
import { List, Picker } from 'antd-mobile-rn'
import { styles } from '../Style'
import { BILL_TYPE } from '../'
import Icon from 'dafuq-bill/src/images/type.png'
import Select from 'dafuq-bill/src/components/Elements/Select'

const Option = Select.Option
interface BillTypeProps {
  onChangeText: (type: string, value: BILL_TYPE) => void
  type: BILL_TYPE
}

const BillType: React.SFC<BillTypeProps> = ({ onChangeText, type }) => {
  const options: { label: string; value: string }[] = Object.entries(BILL_TYPE).reduce(
    (r, [key, index]) => (isNaN(Number(key)) ? r.concat({ label: key, value: index.toString() }) : r),
    []
  )
  console.log(options)
  return (
    <View style={[styles.inputText, { paddingLeft: 0, paddingRight: 0 }]}>
      <Image
        source={Icon as ImageSourcePropType}
        resizeMode="contain"
        style={{ width: 30, height: 30, position: 'absolute', top: 10, left: 10, zIndex: 1 }}
      />
      <List>
        <Select
          value={type.toString()}
          onChange={(value: string) => {
            onChangeText('type', Number(value))
          }}>
          {options.map(option => (
            <Option key={option.value} {...option} />
          ))}
        </Select>
        {/*<Picker*/}
        {/*cols={1}*/}
        {/*value={[type.toString()]}*/}
        {/*onChange={(value: string[]) => {*/}
        {/*onChangeText('type', Number(value[0]))*/}
        {/*}}*/}
        {/*format={() => ' '}*/}
        {/*data={options}>*/}
        {/*<List.Item arrow="horizontal" extra={null} style={{ width: '100%', height: '100%' }}>*/}
        {/*<Text style={styles.pickerContent}>{options.find(option => option.value === type.toString()).label}</Text>*/}
        {/*</List.Item>*/}
        {/*</Picker>*/}
      </List>
    </View>
  )
}

export default BillType
