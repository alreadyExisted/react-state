import React from 'react'
import { Provider } from 'mobx-react'
import {
  CounterContainer,
  RepositoriesContainer,
  counterStore,
  repositoriesStore
} from 'scenes/mobx/containers'

const rootStore = {
  counter: counterStore,
  repositories: repositoriesStore
}

export const MobxScene = () => (
  <Provider {...rootStore}>
    <>
      <CounterContainer />
      <RepositoriesContainer />
    </>
  </Provider>
)
