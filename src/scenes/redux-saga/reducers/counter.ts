import { Action } from 'redux'
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from 'scenes/redux-classic/actions/counter'
import { CounterStore } from 'store'

export const counterReducer = (
  state = { value: 0 },
  action: Action
): CounterStore => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        value: state.value + 1
      }
    case DECREMENT_COUNTER:
      return {
        ...state,
        value: state.value - 1
      }
    default:
      return state
  }
}
