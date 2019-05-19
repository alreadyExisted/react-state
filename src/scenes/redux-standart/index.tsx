import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from 'scenes/redux-standart/store'
import {
  CounterContainer,
  RepositoriesListContainer
} from 'scenes/redux-standart/containers'

const store = configureStore()

export const ReduxStandartScene = () => (
  <Provider store={store}>
    <CounterContainer />
    <RepositoriesListContainer />
  </Provider>
)
