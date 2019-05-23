import { all } from '@redux-saga/core/effects'
import { watchChangeCounter } from 'scenes/redux-saga/sagas/counter'
import { watchFetchRepositories } from 'scenes/redux-saga/sagas/repositories'

export function* rootSaga() {
  yield all([watchChangeCounter(), watchFetchRepositories()])
}
