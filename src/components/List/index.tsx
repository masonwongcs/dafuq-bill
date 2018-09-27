import * as React from 'react'
import { format } from 'date-fns'
import { ScrollView, View, Text, Image, ImageSourcePropType } from 'react-native'
import { styles } from './Style'
import { IReducers } from 'dafuq-bill/src/reducers'
import { connect } from 'react-redux'
import { IList } from 'dafuq-bill/src/reducers/List'
import { BILL_TYPE } from 'dafuq-bill/src/components/Public/Footer'
import noItemImage from 'dafuq-bill/src/images/no-bills.png'
interface HeaderProps {
  list: IList[]
}

class Content extends React.Component<HeaderProps> {
  render() {
    const { list } = this.props
    const lastIndex = list.length - 1
    return list.length === 0 ? (
      <Image style={styles.noItemImage} source={noItemImage as ImageSourcePropType} resizeMode="contain" />
    ) : (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {list.map((item, index) => (
          <View
            key={index}
            style={[
              styles.item,
              index === 0
                ? { marginTop: 90 }
                : index === lastIndex
                  ? {
                      marginBottom: 80
                    }
                  : undefined
            ]}>
            <Text>{item.title}</Text>
            <Text>{format(item.date, 'YYYY-MM-DD')}</Text>
            <Text>{BILL_TYPE[item.type]}</Text>
            <Text>{item.amount}</Text>
          </View>
        ))}
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ List: { list } }: IReducers) => ({ list })

export default connect(mapStateToProps)(Content)
