import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import styles from './A.css'

const A = ({to, exact, children}) => ((
  <NavLink to={to} exact={exact} activeClassName="active">
    {children}
  </NavLink>
))

A.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool
}

export default A
