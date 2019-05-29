import React from 'react'
import { observer, inject } from 'mobx-react'
import { RepositoriesList } from 'scenes/@components'
import { RepositoriesStore } from 'scenes/mobx/containers/repositories/store'

interface StateProps {
  repositories?: RepositoriesStore
}

@inject('repositories')
@observer
export class RepositoriesContainer extends React.Component<StateProps> {
  constructor(props: StateProps) {
    super(props)
    props.repositories!.fetchRepositories()
  }

  render() {
    const repositories = this.props.repositories!
    return (
      <RepositoriesList
        loading={repositories.loading}
        items={repositories.items}
      />
    )
  }
}
