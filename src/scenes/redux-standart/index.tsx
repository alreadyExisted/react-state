import React from 'react'
import { StoreContext } from 'store'
import { store } from 'scenes/redux-standart/store'
import {
  CounterContainer,
  RepositoriesListContainer
} from 'scenes/redux-standart/containers'

export const ReduxStandartScene = () => (
  <StoreContext.Provider value={store}>
    <CounterContainer />
    <RepositoriesListContainer />
  </StoreContext.Provider>
)
