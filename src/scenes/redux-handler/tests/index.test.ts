import { store } from 'scenes/redux-handler/store'
import { incCounter } from 'scenes/redux-handler/containers/counter/store'
import { fetchRepositories } from 'scenes/redux-handler/containers/repositories/store'

describe('redux-handler', () => {
  it('sync action', () => {
    expect(store.getState().counter.value).toBe(0)
    store.dispatch(incCounter())
    expect(store.getState().counter.value).toBe(1)
  })

  it('async action', async () => {
    expect(store.getState().repositories.items).toBeFalsy()
    await store.dispatch(fetchRepositories())
    expect(store.getState().repositories.items).toBeTruthy()
  })
})
