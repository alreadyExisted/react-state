import { combineReducers } from 'redux'
import { RootStore } from 'store'
import { repositoriesReducer } from './repositories'
import { counterReducer } from './counter'

export const rootReducer = combineReducers<RootStore>({
  counter: counterReducer,
  repositories: repositoriesReducer
})
