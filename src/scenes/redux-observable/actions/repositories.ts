import { RepositoryDTO } from 'api/github'

export const FETCH_REPOSITORIES = 'FETCH_REPOSITORIES'
export const START_FETCH_REPOSITORIES = 'START_FETCH_REPOSITORIES'
export const SUCCESS_FETCH_REPOSITORIES = 'SUCCESS_FETCH_REPOSITORIES'
export const FAIL_FETCH_REPOSITORIES = 'FAIL_FETCH_REPOSITORIES'

export const startFetchRepositories = () => ({
  type: START_FETCH_REPOSITORIES
})

export const successFetchRepositories = (payload: RepositoryDTO[]) => ({
  type: SUCCESS_FETCH_REPOSITORIES,
  payload
})

export const failFetchRepositories = (message: string) => ({
  type: FAIL_FETCH_REPOSITORIES,
  payload: message
})
