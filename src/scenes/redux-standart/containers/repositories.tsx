import React, { useEffect, useCallback } from 'react'
import { useDispatch, useMappedState, RootStore } from 'store'
import { RepositoriesList } from 'scenes/@components'
import { fetchRepositoriesIfNeeded } from 'scenes/redux-standart/actions/repositories'

export const RepositoriesListContainer = () => {
  const mapState = useCallback(
    ({ repositories: { items, loading } }: RootStore) => ({ items, loading }),
    []
  )
  const { items, loading } = useMappedState(mapState)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRepositoriesIfNeeded())
  }, [dispatch])

  return <RepositoriesList items={items} loading={loading} />
}
