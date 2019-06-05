import {
  incCounter,
  counterStore,
  incCounterAsync
} from 'scenes/effector/containers/counter/store'
import {
  repositoriesStore,
  fetchRepositories
} from 'scenes/effector/containers/repositories/store'

describe('effector', () => {
  it('sync counter action', () => {
    expect(counterStore.getState().counter).toBe(0)
    incCounter()
    expect(counterStore.getState().counter).toBe(1)
  })

  it('async counter action', async () => {
    expect(counterStore.getState().counter).toBe(1)
    await incCounterAsync({})
    expect(counterStore.getState().counter).toBe(2)
  })

  it('async repositories action', async () => {
    expect(repositoriesStore.getState().repositories.items).toBeFalsy()
    await fetchRepositories({})
    expect(repositoriesStore.getState().repositories.items).toBeTruthy()
  })
})
