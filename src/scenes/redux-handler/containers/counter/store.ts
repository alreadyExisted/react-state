import { sync } from 'redux-handler'
import { CounterStore } from 'store'
import { handler } from 'scenes/redux-handler/handler'

export const counterHandler = handler<CounterStore>({
  value: 0
})

export const incCounter = counterHandler
  .action('INCREMENT_COUNTER')
  .pipe(sync(s => ({ ...s, value: s.value + 1 })))

export const decCounter = counterHandler
  .action('DECREMENT_COUNTER')
  .pipe(sync(s => ({ ...s, value: s.value - 1 })))
