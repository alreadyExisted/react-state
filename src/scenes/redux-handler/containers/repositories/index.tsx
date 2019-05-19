import React, { FC, useEffect } from 'react'
import { DispatchProps, RepositoriesStore, connect } from 'store'
import { RepositoriesList } from 'scenes/@components'
import { fetchRepositories } from 'scenes/redux-handler/containers/repositories/store'

interface StateProps {
  repositories: RepositoriesStore
}

type ComponentProps = StateProps & DispatchProps

const RepositoriesListContainerComponent: FC<ComponentProps> = ({
  repositories: { items, loading },
  dispatch
}) => {
  useEffect(() => {
    dispatch(fetchRepositories())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <RepositoriesList items={items} loading={loading} />
}

export const RepositoriesListContainer = connect<StateProps>(
  ({ repositories }) => ({
    repositories
  })
)(RepositoriesListContainerComponent)
