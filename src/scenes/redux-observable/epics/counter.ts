import { Epic, ofType } from 'redux-observable'
import {
  INCREMENT_COUNTER_ASYNC,
  incCounter
} from 'scenes/redux-observable/actions/counter'
import { delay, map } from 'rxjs/operators'

export const counterEpic: Epic = action$ =>
  action$.pipe(
    ofType(INCREMENT_COUNTER_ASYNC),
    delay(1000),
    map(() => incCounter())
  )
