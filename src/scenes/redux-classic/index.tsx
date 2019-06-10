import React from 'react'
import { StoreContext } from 'store'
import { store } from 'scenes/redux-classic/store'
import {
  CounterContainer,
  RepositoriesListContainer
} from 'scenes/redux-classic/containers'

export const ReduxClassicScene = () => (
  <StoreContext.Provider value={store}>
    <CounterContainer />
    <RepositoriesListContainer />
  </StoreContext.Provider>
)
