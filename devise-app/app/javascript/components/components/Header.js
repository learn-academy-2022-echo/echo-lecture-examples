import React from 'react'
import { Nav, NavItem } from 'reactstrap'

const Header = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  return (
    <Nav>
      <NavItem>
        <a href={sign_in_route}>
          Sign in here
        </a>
      </NavItem>
      <NavItem>
        <a href={sign_out_route}>
          Sign out here
        </a>
      </NavItem>
      <NavItem>
        <a href={new_user_route}>
          Sign up here
        </a>
      </NavItem>
    </Nav>
  )
}

export default Header