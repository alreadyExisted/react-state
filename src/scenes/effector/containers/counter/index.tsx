import React, { FC } from 'react'
import { Counter } from 'scenes/@components'
import { CounterStore, incCounter, decCounter } from './store'

export const CounterContainer: FC = () => (
  <CounterStore>
    {state => (
      <Counter
        counter={state.counter}
        incValue={() => incCounter()}
        decValue={() => decCounter()}
      />
    )}
  </CounterStore>
)
