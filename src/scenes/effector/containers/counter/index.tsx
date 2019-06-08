import React, { useCallback } from 'react'
import { createComponent } from 'effector-react'
import { Counter } from 'scenes/@components'
import { incCounter, decCounter, incCounterAsync, counterStore } from './store'

interface OwnProps {}

interface InjectedProps extends OwnProps {
  counter: number
}

export function CounterContainerComponent({ counter }: InjectedProps) {
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

export const CounterContainer = createComponent<OwnProps, InjectedProps>(
  counterStore,
  (props, { counter }) => (
    <CounterContainerComponent {...props} counter={counter} />
  )
)
