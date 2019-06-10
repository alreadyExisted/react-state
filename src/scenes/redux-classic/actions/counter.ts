import { sleep } from 'utils'
import { MyThunkDispatch } from 'scenes/redux-classic/store'

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const incCounter = () => ({ type: INCREMENT_COUNTER })

export const incCounterAsync = () => getThunk

export const decCounter = () => ({ type: DECREMENT_COUNTER })

async function getThunk(dispatch: MyThunkDispatch) {
  await sleep(1000)
  return dispatch(incCounter())
}
