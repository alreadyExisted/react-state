import React, { FC, useEffect } from 'react'
import { connect, RepositoriesStore } from 'store'
import { RepositoriesList } from 'scenes/@components'
import { fetchRepositoriesIfNeeded } from 'scenes/redux-standart/actions/repositories'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

interface StateProps {
  repositories: RepositoriesStore
}

type ComponentProps = StateProps & {
  dispatch: ThunkDispatch<any, {}, AnyAction>
}

const RepositoriesListContainerComponent: FC<ComponentProps> = ({
  repositories: { items, loading },
  dispatch
}) => {
  useEffect(() => {
    dispatch(fetchRepositoriesIfNeeded())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <RepositoriesList items={items} loading={loading} />
}

export const RepositoriesListContainer = connect<StateProps>(
  ({ repositories }) => ({
    repositories
  })
)(RepositoriesListContainerComponent)
