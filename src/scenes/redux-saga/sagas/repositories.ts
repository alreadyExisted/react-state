import { takeEvery, put, call } from '@redux-saga/core/effects'
import {
  startFetchRepositories,
  successFetchRepositories,
  failFetchRepositories,
  FETCH_REPOSITORIES
} from 'scenes/redux-saga/actions/repositories'
import { api } from 'api'
import { RepositoriesResponseDTO } from 'api/github'

export function* watchFetchRepositories() {
  yield takeEvery(FETCH_REPOSITORIES, fetchRepositoriesAsync)
}

export function* fetchRepositoriesAsync() {
  try {
    yield put(startFetchRepositories())
    const { items }: RepositoriesResponseDTO = yield call(
      api.github.repositories
    )
    yield put(successFetchRepositories(items))
  } catch (error) {
    yield put(failFetchRepositories(error.message))
  }
}
