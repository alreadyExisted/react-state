import React, { FC } from 'react'

interface Props {
  counter: number
  incValue: () => void
  incValueAsync?: () => void
  decValue: () => void
}

export const Counter: FC<Props> = ({
  counter,
  incValue,
  incValueAsync,
  decValue
}) => (
  <div>
    <h2>Counter</h2>
    <p>{counter}</p>
    {incValueAsync && (
      <p>
        <button onClick={incValueAsync}>+ after 1 sec</button>
      </p>
    )}
    <p>
      <button onClick={incValue}>+</button>
    </p>
    <p>
      <button onClick={decValue}>-</button>
    </p>
  </div>
)
