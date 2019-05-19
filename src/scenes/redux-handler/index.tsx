import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'scenes/redux-handler/store'
import {
  CounterContainer,
  RepositoriesListContainer
} from 'scenes/redux-handler/containers'

export const ReduxHandlerScene = () => (
  <Provider store={store}>
    <CounterContainer />
    <RepositoriesListContainer />
  </Provider>
)
