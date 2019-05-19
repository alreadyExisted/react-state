import { AnyAction } from 'redux'
import { RepositoriesStore } from 'store'
import {
  RECEIVE_REPOSITORIES,
  REQUEST_REPOSITORIES
} from 'scenes/redux-standart/actions/repositories'

export const repositoriesReducer = (
  state = {},
  action: AnyAction
): RepositoriesStore => {
  switch (action.type) {
    case REQUEST_REPOSITORIES:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_REPOSITORIES:
      return {
        ...state,
        loading: false,
        items: action.payload.items
      }
    default:
      return state
  }
}
