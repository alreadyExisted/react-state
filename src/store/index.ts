import {
  connect as _connect,
  InferableComponentEnhancer,
  InferableComponentEnhancerWithProps,
  MapStateToPropsParam
} from 'react-redux'
import { Dispatch as _Dispatch } from 'redux'
import { RepositoryDTO } from 'api/github'

// -----------------------------
// --- REDUX CONNECT HELPERS ---
// -----------------------------

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

export type Dispatch = _Dispatch

export interface DispatchProps {
  dispatch: Dispatch
}

interface Connect {
  (): InferableComponentEnhancer<DispatchProps>

  <TStateProps, TOwnProps = {}>(
    mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, RootStore>
  ): InferableComponentEnhancerWithProps<TStateProps & DispatchProps, TOwnProps>
}

export const connect: Connect = ((mapStateToProps: any) =>
  _connect(mapStateToProps)) as any
