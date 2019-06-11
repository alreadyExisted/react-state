import React from 'react'
import { observer, inject } from 'mobx-react'
import { RepositoriesList } from 'scenes/@components'
import { RepositoriesStore } from 'scenes/mobx/containers/repositories/store'

interface InjectedProps {
  repositories: RepositoriesStore
}

@inject('repositories')
@observer
export class RepositoriesContainer extends React.Component {
  constructor(props: InjectedProps) {
    super(props)
    props.repositories.fetchRepositories()
  }

  get injected() {
    const { repositories } = this.props as InjectedProps
    return repositories
  }

  render() {
    const { items, loading } = this.injected
    return <RepositoriesList loading={loading} items={items} />
  }
}
