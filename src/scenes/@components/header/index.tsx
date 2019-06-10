import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import theme from './theme.module.css'

const Item: FC<{ to: string }> = props => (
  <li>
    <NavLink {...props} className={theme.item} activeClassName={theme.active} />
  </li>
)

export const Header = () => (
  <header className={theme.header}>
    <nav>
      <ul className={theme.list}>
        <Item to="/redux-classic" children="Redux Classic" />
        <Item to="/redux-handler" children="Redux Handler" />
        <Item to="/redux-observable" children="Redux Observable" />
        <Item to="/redux-saga" children="Redux Saga" />
        <Item to="/effector" children="Effector" />
        <Item to="/mobx" children="MobX" />
      </ul>
    </nav>
  </header>
)
