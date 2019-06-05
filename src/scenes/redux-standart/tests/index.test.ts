import { store, MyThunkDispatch } from 'scenes/redux-standart/store'
import {
  incCounter,
  incCounterAsync
} from 'scenes/redux-standart/actions/counter'
import { fetchRepositoriesIfNeeded } from 'scenes/redux-standart/actions/repositories'

describe('redux-standart', () => {
  it('sync counter action', () => {
    expect(store.getState().counter.value).toBe(0)
    store.dispatch(incCounter())
    expect(store.getState().counter.value).toBe(1)
  })

  it('async counter action', async () => {
    expect(store.getState().counter.value).toBe(1)
    await (store.dispatch as MyThunkDispatch)(incCounterAsync())
    expect(store.getState().counter.value).toBe(2)
  })

  it('async repositories action', async () => {
    expect(store.getState().repositories.items).toBeFalsy()
    await (store.dispatch as MyThunkDispatch)(fetchRepositoriesIfNeeded())
    expect(store.getState().repositories.items).toBeTruthy()
  })
})
