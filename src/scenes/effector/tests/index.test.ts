import {
  incCounter,
  counterStore
} from 'scenes/effector/containers/counter/store'
import {
  repositoriesStore,
  fetchRepositories
} from 'scenes/effector/containers/repositories/store'

describe('effector', () => {
  it('sync action', () => {
    expect(counterStore.getState().counter).toBe(0)
    incCounter()
    expect(counterStore.getState().counter).toBe(1)
  })

  it('async action', async () => {
    expect(repositoriesStore.getState().repositories.items).toBeFalsy()
    await fetchRepositories({})
    expect(repositoriesStore.getState().repositories.items).toBeTruthy()
  })
})
