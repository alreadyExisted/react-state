import { store } from 'scenes/redux-standart/store'
import { incCounter } from 'scenes/redux-standart/actions/counter'
import { fetchRepositoriesIfNeeded } from 'scenes/redux-standart/actions/repositories'

describe('redux-standart', () => {
  it('sync action', () => {
    expect(store.getState().counter.value).toBe(0)
    store.dispatch(incCounter())
    expect(store.getState().counter.value).toBe(1)
  })

  it('async action', async () => {
    expect(store.getState().repositories.items).toBeFalsy()
    await store.dispatch(fetchRepositoriesIfNeeded() as any)
    expect(store.getState().repositories.items).toBeTruthy()
  })
})
