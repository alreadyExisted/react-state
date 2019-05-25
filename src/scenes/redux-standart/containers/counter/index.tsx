import React, { useCallback } from 'react'
import { Counter } from 'scenes/@components'
import { incCounter, decCounter } from 'scenes/redux-standart/actions/counter'
import { useDispatch, RootStore, useMappedState } from 'store'

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
