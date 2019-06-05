import { Dispatch } from 'redux'
import { RootStore } from 'store'
import { api } from 'api'
import { RepositoryDTO } from 'api/github'
import { MyThunkDispatch } from 'scenes/redux-standart/store'

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

const fetchRepositories = () => async (dispatch: Dispatch) => {
  dispatch(startFetchRepositories())
  try {
    const { items } = await api.github.repositories()
    dispatch(successFetchRepositories(items))
  } catch (e) {
    dispatch(failFetchRepositories(e.message))
  }
}

const shouldFetchRepositories = (state: RootStore) => {
  const { items, loading } = state.repositories

  if (!items) return true

  if (loading) return false

  return false
}

export const fetchRepositoriesIfNeeded = () => getThunk

async function getThunk(dispatch: MyThunkDispatch, getState: () => RootStore) {
  if (shouldFetchRepositories(getState())) {
    return dispatch(fetchRepositories())
  }
}
