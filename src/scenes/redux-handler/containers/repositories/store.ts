import { RepositoriesStore } from 'store'
import { handler } from 'scenes/redux-handler/handler'
import { promise, fulfilled, loading } from 'redux-handler'
import { api } from 'api'

export const repositoriesHandler = handler<RepositoriesStore>({})

export const fetchRepositories = repositoriesHandler
  .action('FETCH_REPOSITORIES')
  .pipe(
    promise(api.github.repositories),
    fulfilled((s, { payload: { items } }) => ({ ...s, items })),
    loading('loading')
  )
