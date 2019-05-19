import { createStore, applyMiddleware, DeepPartial } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from 'scenes/redux-standart/reducers'

export const configureStore = (preloadedState?: DeepPartial<{}>) =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk))
