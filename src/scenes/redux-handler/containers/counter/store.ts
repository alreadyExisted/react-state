import { sync, rx } from 'redux-handler'
import { CounterStore } from 'store'
import { handler } from 'scenes/redux-handler/handler'
import { timer } from 'rxjs'
import { concat } from 'rxjs/operators'

export const counterHandler = handler<CounterStore>({
  value: 0
})

export const incCounter = counterHandler
  .action('INCREMENT_COUNTER')
  .pipe(sync(s => ({ ...s, value: s.value + 1 })))

export const incCounterAsync = counterHandler
  .action('INCREMENT_COUNTER_ASYNC')
  .pipe(rx(() => timer(1000).pipe(concat([incCounter()]))))

export const decCounter = counterHandler
  .action('DECREMENT_COUNTER')
  .pipe(sync(s => ({ ...s, value: s.value - 1 })))
