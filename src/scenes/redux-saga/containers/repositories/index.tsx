import React, { FC, useEffect } from 'react'
import { connect, RepositoriesStore, DispatchProps } from 'store'
import { RepositoriesList } from 'scenes/@components'
import { fetchRepositories } from 'scenes/redux-saga/actions/repositories'

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
