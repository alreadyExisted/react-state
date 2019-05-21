import React from 'react'
import { Provider } from 'react-redux'
import {
  CounterContainer,
  RepositoriesListContainer
} from 'scenes/redux-standart/containers'
import { store } from 'scenes/redux-standart/store'

export const ReduxStandartScene = () => (
  <Provider store={store}>
    <CounterContainer />
    <RepositoriesListContainer />
  </Provider>
)
