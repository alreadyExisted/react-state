import { createStore, applyMiddleware, compose, Action } from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { rootReducer } from 'scenes/redux-classic/reducers'
import { RootStore } from 'store'

export type MyThunkDispatch = ThunkDispatch<RootStore, undefined, Action>

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'redux-classic'
      })
    : compose

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
