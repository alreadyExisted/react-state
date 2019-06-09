import { createEpicMiddleware } from 'redux-observable'
import { applyMiddleware, createStore, compose } from 'redux'
import { rootReducer } from 'scenes/redux-observable/reducers'
import { rootEpic } from 'scenes/redux-observable/epics'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'redux-observable'
      })
    : compose

const epicMiddleware = createEpicMiddleware()

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
)

epicMiddleware.run(rootEpic)
