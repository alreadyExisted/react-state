import { applyMiddleware, createStore } from 'redux'
import { combineHandlers, handlerMiddleware } from 'redux-handler'
import { RootStore } from 'store'
import { counterHandler } from 'scenes/redux-handler/containers/counter/store'
import { repositoriesHandler } from 'scenes/redux-handler/containers/repositories/store'

const reducer = combineHandlers<RootStore>({
  counter: counterHandler,
  repositories: repositoriesHandler
})

export const store = createStore(
  reducer.buildReducer(),
  applyMiddleware(handlerMiddleware())
)
