import { store } from 'scenes/redux-handler/store'
import {
  incCounter,
  incCounterAsync
} from 'scenes/redux-handler/containers/counter/store'
import { fetchRepositories } from 'scenes/redux-handler/containers/repositories/store'

describe('redux-handler', () => {
  it('sync counter action', () => {
    expect(store.getState().counter.value).toBe(0)
    store.dispatch(incCounter())
    expect(store.getState().counter.value).toBe(1)
  })

  it('async counter action', async () => {
    expect(store.getState().counter.value).toBe(1)
    await store.dispatch(incCounterAsync())
    expect(store.getState().counter.value).toBe(2)
  })

  it('async repositories action', async () => {
    expect(store.getState().repositories.items).toBeFalsy()
    await store.dispatch(fetchRepositories())
    expect(store.getState().repositories.items).toBeTruthy()
  })
})
