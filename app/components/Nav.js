import React from 'react'
import {
  Link,
  NavLink
} from 'react-router-dom'

function Nav (props) {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/' >
          Home
        </ NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/popular' >
          Popular
        </ NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/battle' >
          Battle
        </ NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav
