import React, { useCallback } from 'react'
import { createComponent } from 'effector-react'
import { Counter } from 'scenes/@components'
import { incCounter, decCounter, incCounterAsync, counterStore } from './store'

export const CounterContainer = createComponent(
  counterStore,
  (_, { counter }) => {
    const incValue = useCallback(() => incCounter(), [])
    const incValueAsync = useCallback(() => incCounterAsync({}), [])
    const decValue = useCallback(() => decCounter(), [])
    return (
      <Counter
        counter={counter}
        incValue={incValue}
        incValueAsync={incValueAsync}
        decValue={decValue}
      />
    )
  }
)
