import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

// import styles from './MenuLink.css'

const MenuLink = ({to, exact, children}) => ((
  <li>
    <NavLink to={to} exact={exact} activeClassName='active'>
      {children}
    </NavLink>
  </li>
))

MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool
}

export default MenuLink
