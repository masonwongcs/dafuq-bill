import { BILL_TYPE } from 'dafuq-bill/src/components/Public/Footer'

export const ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST'
export const addItemToList = (item: { title: string; date: Date; type: BILL_TYPE; remark?: string }) => ({
  type: ADD_ITEM_TO_LIST,
  payload: { item }
})
