import { combineEpics } from 'redux-observable'
import { counterEpic } from 'scenes/redux-observable/epics/counter'
import { repositoriesEpic } from 'scenes/redux-observable/epics/repositories'

export const rootEpic = combineEpics(counterEpic, repositoriesEpic)
