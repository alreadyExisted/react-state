import React, { useEffect, useCallback } from 'react'
import { useDispatch, useMappedState, RootStore } from 'store'
import { RepositoriesList } from 'scenes/@components'
import { fetchRepositories } from 'scenes/redux-handler/containers/repositories/store'

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
