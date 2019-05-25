import React, { useEffect } from 'react'
import { RepositoriesList } from 'scenes/@components'
import {
  fetchRepositories,
  RepositoriesStoreConsumer
} from 'scenes/effector/containers/repositories/store'

export const RepositoriesListContainer = () => {
  useEffect(() => {
    fetchRepositories({})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <RepositoriesStoreConsumer>
      {({ repositories: { items, loading } }) => (
        <RepositoriesList items={items} loading={loading} />
      )}
    </RepositoriesStoreConsumer>
  )
}
