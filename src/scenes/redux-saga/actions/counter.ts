export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const INCREMENT_COUNTER_ASYNC = 'INCREMENT_COUNTER_ASYNC'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const incCounter = () => ({ type: INCREMENT_COUNTER })
export const incCounterAsync = () => ({ type: INCREMENT_COUNTER_ASYNC })
export const decCounter = () => ({ type: DECREMENT_COUNTER })
