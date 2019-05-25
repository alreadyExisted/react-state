import { createStore, createStoreObject, createEvent } from 'effector'
import { createStoreConsumer } from 'effector-react'

export const incCounter = createEvent('increment counter')
export const decCounter = createEvent('decrement counter')

const counter = createStore(0)
  .on(incCounter, state => state + 1)
  .on(decCounter, state => state - 1)

export const counterStore = createStoreObject({
  counter
})

export const CounterStoreConsumer = createStoreConsumer(counterStore)
