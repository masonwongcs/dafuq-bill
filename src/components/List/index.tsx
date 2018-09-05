import * as React from 'react'
import moment from 'moment'
import { ScrollView, View, NativeSyntheticEvent, NativeScrollEvent, Text, Image } from 'react-native'
import { styles } from './Style'
import { IReducers } from 'reducers'
import { connect } from 'react-redux'
import { IList } from 'reducers/List'
import { BILL_TYPE } from '../Public/Footer'
import noBillsImage from 'images/no-bills.png'

interface HeaderProps {
  list: IList[]
}

class Content extends React.Component<HeaderProps> {
  render() {
    const { list } = this.props
    console.log('List size: ', list.length)
    const lastIndex = list.length - 1
    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        onScroll={event => {
          console.log((event as NativeSyntheticEvent<NativeScrollEvent>).nativeEvent.contentOffset.y)
        }}>
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
            <Text>{moment(item.date).format('YYYY-MM-DD')}</Text>
            <Text>{BILL_TYPE[item.type]}</Text>
            <Text>{item.remark}</Text>
          </View>
        ))}
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ List: { list } }: IReducers) => ({ list })

export default connect(mapStateToProps)(Content)
