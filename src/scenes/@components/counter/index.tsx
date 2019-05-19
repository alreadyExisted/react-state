import React, { FC } from 'react'

interface Props {
  counter: number
  incValue: () => void
  decValue: () => void
}

export const Counter: FC<Props> = ({ counter, incValue, decValue }) => (
  <div>
    <h2>Counter</h2>
    <p>{counter}</p>
    <p>
      <button onClick={incValue}>+</button>
    </p>
    <p>
      <button onClick={decValue}>-</button>
    </p>
  </div>
)
