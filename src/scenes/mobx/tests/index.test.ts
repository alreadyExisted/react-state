import { counterStore, repositoriesStore } from 'scenes/mobx/containers'

describe('mobx', () => {
  it('sync counter action', () => {
    expect(counterStore.value).toBe(0)
    counterStore.incCounter()
    expect(counterStore.value).toBe(1)
  })

  it('async counter action', async () => {
    expect(counterStore.value).toBe(1)
    await counterStore.incCounterAsync()
    expect(counterStore.value).toBe(2)
  })

  it('async repositories action', async () => {
    expect(repositoriesStore.items).toBeFalsy()
    await repositoriesStore.fetchRepositories()
    expect(repositoriesStore.items).toBeTruthy()
  })
})
