import {
  incCounter,
  counterStore
} from 'scenes/effector/containers/counter/store'
import {
  repositoriesstore,
  fetchRepositories
} from 'scenes/effector/containers/repositories/store'

describe('effector', () => {
  it('sync action', () => {
    expect(counterStore.getState().counter).toBe(0)
    incCounter()
    expect(counterStore.getState().counter).toBe(1)
  })

  it('async action', async () => {
    expect(repositoriesstore.getState().repositories.items).toBeFalsy()
    await fetchRepositories({})
    expect(repositoriesstore.getState().repositories.items).toBeTruthy()
  })
})
