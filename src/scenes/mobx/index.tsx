import React from 'react'
import { CounterContainer } from 'scenes/mobx/containers/counter'
import { counterStore } from 'scenes/mobx/containers/counter/store'
import { Provider } from 'mobx-react'

const rootStore = {
  counter: counterStore
}

export const MobxScene = () => (
  <Provider {...rootStore}>
    <CounterContainer />
  </Provider>
)
