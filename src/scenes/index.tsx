import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout, Header } from 'scenes/@components'
import { ReduxStandartScene } from 'scenes/redux-standart'
import { ReduxHandlerScene } from 'scenes/redux-handler'
import { ReduxSagaScene } from 'scenes/redux-saga'
import { EffectoreScene } from 'scenes/effector'

export const Scenes = () => (
  <Layout>
    <Header />
    <Switch>
      <Redirect exact from="/" to="/redux-standart" />
      <Route exact path="/redux-standart" component={ReduxStandartScene} />
      <Route path="/redux-handler" component={ReduxHandlerScene} />
      <Route path="/redux-observables" render={() => 2} />
      <Route path="/redux-saga" component={ReduxSagaScene} />
      <Route path="/effector" component={EffectoreScene} />
      <Route path="/mobx" render={() => 5} />
    </Switch>
  </Layout>
)
