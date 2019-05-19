import { callApi } from '../ajax'

export interface RepositoryDTO {
  name: string
}

interface RepositoriesResponseDTO {
  items: RepositoryDTO[]
}

export const repositories = () =>
  callApi<RepositoriesResponseDTO>(
    'search/repositories?q=+language:js&sort=stars&order=desc&page=1&per_page=10'
  )

export default {
  repositories
}
