import { callApi } from '../ajax'

export interface RepositoryDTO {
  name: string
}

export interface RepositoriesResponseDTO {
  items: RepositoryDTO[]
}

const repositories = () =>
  callApi<RepositoriesResponseDTO>(
    'search/repositories?q=+language:js&sort=stars&order=desc&page=1&per_page=10'
  )

export default {
  repositories
}
