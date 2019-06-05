import { observable, action } from 'mobx'
import { sleep } from 'utils'

export class CounterStore {
  @observable value = 0

  @action incCounter() {
    this.value += 1
  }

  @action async incCounterAsync() {
    await sleep(1000)
    this.incCounter()
  }

  @action decCounter() {
    this.value -= 1
  }
}

export const counterStore = new CounterStore()
