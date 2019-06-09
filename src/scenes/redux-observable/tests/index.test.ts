import { ActionsObservable, StateObservable } from 'redux-observable'
import {
  startFetchRepositories,
  SUCCESS_FETCH_REPOSITORIES
} from 'scenes/redux-observable/actions/repositories'
import { repositoriesEpic } from 'scenes/redux-observable/epics/repositories'
import {
  incCounterAsync,
  INCREMENT_COUNTER
} from 'scenes/redux-observable/actions/counter'
import { counterEpic } from 'scenes/redux-observable/epics/counter'
import { store } from 'scenes/redux-observable/store'

describe('redux-observable', () => {
  it('async counter action', async () => {
    const action$ = ActionsObservable.of(incCounterAsync())
    const state$ = StateObservable.create(store)
    const actionReceived = await counterEpic(action$, state$, {}).toPromise()
    expect(actionReceived.type).toBe(INCREMENT_COUNTER)
  })

  it('async repositories action', async () => {
    const action$ = ActionsObservable.of(startFetchRepositories())
    const state$ = StateObservable.create()
    const actionReceived = await repositoriesEpic(
      action$,
      state$,
      {}
    ).toPromise()
    expect(actionReceived.type).toBe(SUCCESS_FETCH_REPOSITORIES)
    expect(actionReceived.payload).toBeTruthy()
  })
})
