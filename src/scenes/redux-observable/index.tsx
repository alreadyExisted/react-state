import React from 'react'
import { StoreContext } from 'store'
import { store } from 'scenes/redux-observable/store'
import {
  CounterContainer,
  RepositoriesListContainer
} from 'scenes/redux-observable/containers'

export const ReduxObservable = () => (
  <StoreContext.Provider value={store}>
    <CounterContainer />
    <RepositoriesListContainer />
  </StoreContext.Provider>
)
