import { takeEvery, put, delay } from '@redux-saga/core/effects'
import {
  INCREMENT_COUNTER_ASYNC,
  incCounter
} from 'scenes/redux-saga/actions/counter'

export function* watchChangeCounter() {
  yield takeEvery(INCREMENT_COUNTER_ASYNC, incCounterAsync)
}

function* incCounterAsync() {
  yield delay(1000)
  yield put(incCounter())
}
