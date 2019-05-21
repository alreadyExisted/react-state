import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from 'scenes/redux-standart/reducers'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'redux-standart'
      })
    : compose

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
