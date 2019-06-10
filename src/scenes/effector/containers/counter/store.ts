import {
  createStore,
  createStoreObject,
  createApi,
  createEffect
} from 'effector'
import { sleep } from 'utils'

export const incCounterAsync = createEffect('increment counter async', {
  handler: () => sleep(1000)
})

const counter = createStore(0).on(incCounterAsync.done, state => state + 1)

export const { incCounter, decCounter } = createApi(counter, {
  incCounter: state => state + 1,
  decCounter: state => state - 1
})

export const counterStore = createStoreObject({
  counter
})
