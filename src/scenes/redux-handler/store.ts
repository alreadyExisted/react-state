import { applyMiddleware, createStore, compose } from 'redux'
import { combineHandlers, handlerMiddleware } from 'redux-handler'
import { RootStore } from 'store'
import { counterHandler } from 'scenes/redux-handler/containers/counter/store'
import { repositoriesHandler } from 'scenes/redux-handler/containers/repositories/store'
import { Action } from 'redux-handler/types'

const reducer = combineHandlers<RootStore>({
  counter: counterHandler,
  repositories: repositoriesHandler
})

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'redux-handler'
      })
    : compose

export const store = createStore(
  reducer.buildReducer(),
  composeEnhancers(
    applyMiddleware(
      handlerMiddleware({
        errorHandler: (error, { type: _ }): Action | void => {
          // Unhandled API error:
          throw error
        }
      })
    )
  )
)
