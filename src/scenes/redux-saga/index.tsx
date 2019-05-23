import React from 'react'
import { Provider } from 'react-redux'
import {
  CounterContainer,
  RepositoriesListContainer
} from 'scenes/redux-saga/containers'
import { store } from 'scenes/redux-saga/store'

export const ReduxSagaScene = () => (
  <Provider store={store}>
    <CounterContainer />
    <RepositoriesListContainer />
  </Provider>
)
