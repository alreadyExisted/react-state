import React from 'react'
import { observer, inject } from 'mobx-react'
import { Counter } from 'scenes/@components'
import { CounterStore } from 'scenes/mobx/containers/counter/store'

interface InjectedProps {
  counter: CounterStore
}

@inject('counter')
@observer
export class CounterContainer extends React.Component {
  get injected() {
    const { counter } = this.props as InjectedProps
    return counter
  }

  render() {
    return (
      <Counter
        counter={this.injected.value}
        incValue={this.incValue}
        incValueAsync={this.incValueAsync}
        decValue={this.decValue}
      />
    )
  }

  private incValue = () => this.injected.incCounter()

  private incValueAsync = () => this.injected.incCounterAsync()

  private decValue = () => this.injected.decCounter()
}
