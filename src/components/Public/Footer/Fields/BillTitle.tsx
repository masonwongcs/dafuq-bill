import * as React from 'react'
import { styles } from '../Style'
import { Image, ImageSourcePropType, TextInput, View } from 'react-native'
import Icon from 'dafuq-bill/src/images/label.png'
import { BILL_TYPE } from '../index'

interface BillTitleProps {
  onChangeText: (type: string, value: string) => void
  title: string
}
const BillTitle: React.SFC<BillTitleProps> = ({ title, onChangeText }) => (
  <View style={[styles.inputText, { marginTop: 20 }]}>
    <Image
      source={Icon as ImageSourcePropType}
      resizeMode="contain"
      style={{ width: 30, height: 30, position: 'absolute', top: 10, left: 10 }}
    />
    <TextInput
      placeholder="Bill Title"
      onChangeText={onChangeText.bind(null, 'title')}
      value={title}
      style={{ fontWeight: 'bold', height: '100%', paddingLeft: 30 }}
      editable
      maxLength={40}
    />
  </View>
)

export default BillTitle
