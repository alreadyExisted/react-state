import { observable, action } from 'mobx'
import { RepositoryDTO, RepositoriesResponseDTO } from 'api/github'
import { api } from 'api'

export class RepositoriesStore {
  @observable.shallow items?: RepositoryDTO[]
  @observable loading?: boolean

  @action async fetchRepositories() {
    if (this.items) return

    this.loading = true
    await api.github.repositories().then(
      action((data: RepositoriesResponseDTO) => {
        this.items = data.items
        this.loading = false
      })
    )
  }
}

export const repositoriesStore = new RepositoriesStore()
