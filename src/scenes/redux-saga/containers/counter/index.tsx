import React, { FC } from 'react'
import { DispatchProps, connect } from 'store'
import { Counter } from 'scenes/@components'
import {
  incCounter,
  decCounter,
  incCounterAsync
} from 'scenes/redux-saga/actions/counter'

interface StateProps {
  counter: number
}

type ComponentProps = StateProps & DispatchProps

const CounterContainerComponent: FC<ComponentProps> = ({
  counter,
  dispatch
}) => (
  <Counter
    counter={counter}
    incValue={() => dispatch(incCounter())}
    incValueAsync={() => dispatch(incCounterAsync())}
    decValue={() => dispatch(decCounter())}
  />
)

export const CounterContainer = connect<StateProps>(({ counter }) => ({
  counter: counter.value
}))(CounterContainerComponent)
