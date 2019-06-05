import {
  createStore,
  createStoreObject,
  createEvent,
  createEffect
} from 'effector'
import { sleep } from 'utils'

export const incCounter = createEvent('increment counter')
export const incCounterAsync = createEffect('increment counter async').use(() =>
  sleep(1000)
)
export const decCounter = createEvent('decrement counter')

const counter = createStore(0)
  .on(incCounter, state => state + 1)
  .on(decCounter, state => state - 1)

incCounterAsync.done.watch(() => incCounter())

export const counterStore = createStoreObject({
  counter
})
