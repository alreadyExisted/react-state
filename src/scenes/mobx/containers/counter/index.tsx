import React from 'react'
import { observer, inject } from 'mobx-react'
import { Counter } from 'scenes/@components'
import { CounterStore } from 'scenes/mobx/containers/counter/store'

interface StateProps {
  counterStore: CounterStore
}

@inject('counter')
@observer
export class CounterContainer extends React.Component<StateProps> {
  render() {
    console.log(this.props)
    return (
      <Counter
        counter={this.props.counterStore.value}
        incValue={this.props.counterStore.incCounter}
        decValue={this.props.counterStore.decCounter}
      />
    )
  }
}
