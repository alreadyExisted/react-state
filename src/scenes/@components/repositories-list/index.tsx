import React, { FC } from 'react'
import { RepositoryDTO } from 'api/github'

interface Props {
  items?: RepositoryDTO[]
  loading?: boolean
}

export const RepositoriesList: FC<Props> = ({ items, loading }) => {
  if (!items || loading) return <div>Loading...</div>

  return (
    <div>
      <h2>Repositories List</h2>
      <ul>
        {items.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
