import React from 'react'
import { createComponent } from 'effector-react'
import { Counter } from 'scenes/@components'
import { incCounter, decCounter, counterStore } from './store'

export const CounterContainer = createComponent(
  counterStore,
  (_, { counter }) => (
    <Counter
      counter={counter}
      incValue={() => incCounter()}
      decValue={() => decCounter()}
    />
  )
)
