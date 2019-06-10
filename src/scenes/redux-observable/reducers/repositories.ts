import { AnyAction } from 'redux'
import { RepositoriesStore } from 'store'
import {
  START_FETCH_REPOSITORIES,
  SUCCESS_FETCH_REPOSITORIES,
  FAIL_FETCH_REPOSITORIES
} from 'scenes/redux-classic/actions/repositories'

export const repositoriesReducer = (
  state = {},
  action: AnyAction
): RepositoriesStore => {
  switch (action.type) {
    case START_FETCH_REPOSITORIES:
      return {
        ...state,
        loading: true
      }
    case SUCCESS_FETCH_REPOSITORIES:
      return {
        ...state,
        loading: false,
        items: action.payload
      }
    case FAIL_FETCH_REPOSITORIES:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
