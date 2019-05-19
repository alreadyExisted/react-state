import React, { FC } from 'react'
import theme from './theme.module.css'

export const Layout: FC = ({ children }) => (
  <div className={theme.container}>{children}</div>
)
