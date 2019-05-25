import React from 'react'
import { StoreContext } from 'store'
import { store } from 'scenes/redux-saga/store'
import {
  CounterContainer,
  RepositoriesListContainer
} from 'scenes/redux-saga/containers'

export const ReduxSagaScene = () => (
  <StoreContext.Provider value={store}>
    <CounterContainer />
    <RepositoriesListContainer />
  </StoreContext.Provider>
)
