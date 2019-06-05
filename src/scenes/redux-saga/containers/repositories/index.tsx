import React, { useEffect, useCallback } from 'react'
import { RootStore, useMappedState, useDispatch } from 'store'
import { RepositoriesList } from 'scenes/@components'
import { fetchRepositories } from 'scenes/redux-saga/actions/repositories'

export const RepositoriesListContainer = () => {
  const mapState = useCallback(
    ({ repositories: { items, loading } }: RootStore) => ({ items, loading }),
    []
  )
  const { items, loading } = useMappedState(mapState)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRepositories())
  }, [dispatch])

  return <RepositoriesList items={items} loading={loading} />
}
