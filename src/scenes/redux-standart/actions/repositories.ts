import { Dispatch } from 'redux'
import { RootStore } from 'store'
import { api } from 'api'
import { RepositoryDTO } from 'api/github'

export const REQUEST_REPOSITORIES = 'REQUEST_REPOSITORIES'
export const RECEIVE_REPOSITORIES = 'RECEIVE_REPOSITORIES'

export const requestRepositories = {
  type: REQUEST_REPOSITORIES
}

export const receiveRepositories = (payload: { items: RepositoryDTO[] }) => ({
  type: RECEIVE_REPOSITORIES,
  payload
})

const fetchRepositories = () => async (dispatch: Dispatch) => {
  dispatch(requestRepositories)
  const { items } = await api.github.repositories()
  dispatch(receiveRepositories({ items }))
  return items
}

const shouldFetchRepositories = (state: RootStore) => {
  const { items, loading } = state.repositories

  if (!items) return true

  if (loading) return false

  return false
}

export const fetchRepositoriesIfNeeded = () => (
  dispatch: any,
  getState: () => RootStore
) => {
  if (shouldFetchRepositories(getState())) {
    return dispatch(fetchRepositories())
  }
}
