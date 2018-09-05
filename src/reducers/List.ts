import { BILL_TYPE } from 'components/Public/Footer'
import { ADD_ITEM_TO_LIST } from 'actions/List'

export interface IList {
  type: BILL_TYPE
  title: string
  amount: string
  date: Date
}
export interface IListState {
  list: IList[]
}

const LIST_STATE: IListState = {
  list: []
}

function List(state = LIST_STATE, action): IListState {
  switch (action.type) {
    case ADD_ITEM_TO_LIST: {
      state = Object.assign({}, state, {
        list: state.list.concat(action.payload.item)
      })
    }
  }
  return state
}

export default List
