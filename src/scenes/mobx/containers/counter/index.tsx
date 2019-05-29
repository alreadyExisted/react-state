import React from 'react'
import { observer, inject } from 'mobx-react'
import { Counter } from 'scenes/@components'
import { CounterStore } from './store'

interface StateProps {
  counter?: CounterStore
}

@inject('counter')
@observer
export class CounterContainer extends React.Component<StateProps> {
  render() {
    const counter = this.props.counter!
    return (
      <Counter
        counter={counter.value}
        incValue={() => counter.incCounter()}
        decValue={() => counter.decCounter()}
      />
    )
  }
}
