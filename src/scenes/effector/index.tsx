import React from 'react'
import { CounterContainer } from 'scenes/effector/containers/counter'
import { RepositoriesListContainer } from 'scenes/effector/containers/repositories'

export const EffectoreScene = () => (
  <>
    <CounterContainer />
    <RepositoriesListContainer />
  </>
)
