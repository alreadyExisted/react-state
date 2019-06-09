import { Epic, ofType } from 'redux-observable'
import { switchMap } from 'rxjs/operators'
import {
  START_FETCH_REPOSITORIES,
  successFetchRepositories,
  failFetchRepositories
} from 'scenes/redux-observable/actions/repositories'
import { api } from 'api'

export const repositoriesEpic: Epic = action$ =>
  action$.pipe(
    ofType(START_FETCH_REPOSITORIES),
    switchMap(async () => {
      try {
        const res = await api.github.repositories()
        return successFetchRepositories(res.items)
      } catch (err) {
        return failFetchRepositories(err.message)
      }
    })
  )
