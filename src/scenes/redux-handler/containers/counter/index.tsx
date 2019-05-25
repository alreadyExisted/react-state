import React, { useCallback } from 'react'
import { RootStore, useMappedState, useDispatch } from 'store'
import { Counter } from 'scenes/@components'
import { incCounter, decCounter } from './store'

export const CounterContainer = () => {
  const mapState = useCallback(
    (state: RootStore) => ({ counter: state.counter.value }),
    []
  )
  const { counter } = useMappedState(mapState)
  const dispatch = useDispatch()

  return (
    <Counter
      counter={counter}
      incValue={() => dispatch(incCounter())}
      decValue={() => dispatch(decCounter())}
    />
  )
}
