import React, { FC } from 'react'
import { Counter } from 'scenes/@components'
import { CounterStoreConsumer, incCounter, decCounter } from './store'

export const CounterContainer: FC = () => (
  <CounterStoreConsumer>
    {({ counter }) => (
      <Counter
        counter={counter}
        incValue={() => incCounter()}
        decValue={() => decCounter()}
      />
    )}
  </CounterStoreConsumer>
)
