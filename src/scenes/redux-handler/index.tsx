import React from 'react'
import { StoreContext } from 'store'
import { store } from 'scenes/redux-handler/store'
import {
  CounterContainer,
  RepositoriesListContainer
} from 'scenes/redux-handler/containers'

export const ReduxHandlerScene = () => (
  <StoreContext.Provider value={store}>
    <CounterContainer />
    <RepositoriesListContainer />
  </StoreContext.Provider>
)
