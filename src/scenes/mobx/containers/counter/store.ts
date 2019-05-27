import { observable, action } from 'mobx'

export class CounterStore {
  @observable value = 0

  @action incCounter() {
    this.value += 1
  }

  @action decCounter() {
    this.value -= 1
  }
}

export const counterStore = new CounterStore()
