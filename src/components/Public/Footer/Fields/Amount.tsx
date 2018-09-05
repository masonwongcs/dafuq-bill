import * as React from 'react'
import { styles } from '../Style'
import { Image, ImageSourcePropType, TextInput, View } from 'react-native'
import Icon from 'images/amount.png'

interface AmountProps {
  onChangeText: (type: string, value: string) => void
  amount: string
}

const Amount: React.SFC<AmountProps> = ({ amount, onChangeText }) => (
  <View style={styles.inputText}>
    <Image
      source={Icon as ImageSourcePropType}
      resizeMode="contain"
      style={{ width: 30, height: 30, position: 'absolute', top: 10, left: 10 }}
    />
    <TextInput
      keyboardType="decimal-pad"
      onChangeText={onChangeText.bind(null, 'amount')}
      value={amount}
      placeholder="Amount"
      editable
      style={{ fontWeight: 'bold', height: '100%', paddingLeft: 30 }}
      maxLength={40}
    />
  </View>
)

export default Amount
