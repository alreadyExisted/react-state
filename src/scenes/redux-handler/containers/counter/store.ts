import { sync, rx } from 'redux-handler'
import { of } from 'rxjs'
import { concatMap, timeout } from 'rxjs/operators'
import { CounterStore } from 'store'
import { handler } from 'scenes/redux-handler/handler'

export const counterHandler = handler<CounterStore>({
  value: 0
})

export const incCounter = counterHandler
  .action('INCREMENT_COUNTER')
  .pipe(sync(s => ({ ...s, value: s.value + 1 })))

export const incCounterAsync = counterHandler
  .action('INCREMENT_COUNTER_ASYNC')
  .pipe(
    rx(() =>
      of(1000).pipe(concatMap(duration => [timeout(duration), incCounter()]))
    )
  )

export const decCounter = counterHandler
  .action('DECREMENT_COUNTER')
  .pipe(sync(s => ({ ...s, value: s.value - 1 })))
