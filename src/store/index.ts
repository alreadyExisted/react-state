import { create } from 'redux-react-hook'
import { RepositoryDTO } from 'api/github'

export interface CounterStore {
  value: number
}

export interface RepositoriesStore {
  items?: RepositoryDTO[]
  loading?: boolean
  error?: string
}

export interface RootStore {
  counter: CounterStore
  repositories: RepositoriesStore
}

export const { StoreContext, useDispatch, useMappedState } = create<
  RootStore,
  any,
  any
>()
