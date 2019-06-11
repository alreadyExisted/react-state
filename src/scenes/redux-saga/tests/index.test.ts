import { put, call } from '@redux-saga/core/effects'
import { cloneableGenerator } from '@redux-saga/testing-utils'
import { fetchRepositoriesAsync } from 'scenes/redux-saga/sagas/repositories'
import {
  startFetchRepositories,
  successFetchRepositories,
  failFetchRepositories
} from 'scenes/redux-saga/actions/repositories'
import { api } from 'api'

describe('redux-saga', () => {
  const generator = cloneableGenerator(fetchRepositoriesAsync)()
  const items = [{ name: 'Saga' }]

  it('its put start', () => {
    expect(generator.next().value).toEqual(put(startFetchRepositories()))
  })

  it('its call api', () => {
    expect(generator.next().value).toEqual(call(api.github.repositories))
  })

  describe('request successful', () => {
    const clone = generator.clone()
    // eslint-disable-next-line no-unused-expressions
    clone.next().value
    // eslint-disable-next-line no-unused-expressions
    clone.next().value

    it('its put success', () => {
      const result = clone.next({ items }).value
      expect(result).toEqual(put(successFetchRepositories(items)))
    })
  })

  describe('request failure', () => {
    const clone = generator.clone()
    // eslint-disable-next-line no-unused-expressions
    clone.next().value
    // eslint-disable-next-line no-unused-expressions
    clone.next().value

    it('its put fail', () => {
      const error = new Error('404 Not Found')
      const result = clone.throw!(error).value
      expect(result).toEqual(put(failFetchRepositories(error.message)))
    })
  })
})
