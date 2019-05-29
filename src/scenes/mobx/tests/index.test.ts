import { counterStore, repositoriesStore } from 'scenes/mobx/containers'

describe('mobx', () => {
  it('sync action', () => {
    expect(counterStore.value).toBe(0)
    counterStore.incCounter()
    expect(counterStore.value).toBe(1)
  })

  it('async action', async () => {
    expect(repositoriesStore.items).toBeFalsy()
    await repositoriesStore.fetchRepositories()
    expect(repositoriesStore.items).toBeTruthy()
  })
})
