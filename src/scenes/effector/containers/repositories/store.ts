import { createStore, createStoreObject, createEffect } from 'effector'
import { createStoreConsumer } from 'effector-react'
import { api } from 'api'
import { RepositoriesStore } from 'store'
import { RepositoriesResponseDTO } from 'api/github'

export const fetchRepositories = createEffect<
  {},
  RepositoriesResponseDTO,
  { message: string }
>('fetch repositories').use(_ => api.github.repositories())

const repositories = createStore<RepositoriesStore>({})
  .on(fetchRepositories.done, (_, payload) => ({
    items: payload.result.items,
    loading: false
  }))
  .on(fetchRepositories.fail, (state, payload) => ({
    ...state,
    loading: false,
    error: payload.error.message
  }))

export const repositoriesStore = createStoreObject({
  repositories
})

export const RepositoriesStoreConsumer = createStoreConsumer(repositoriesStore)
