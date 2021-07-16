import React from 'react';
import { Nav, NavLink } from 'reactstrap';

function Navbar() {
  return (
    <div>
      <Nav className="navbar">
        <NavLink className="navbar-link" href="/">
          Se connecter
        </NavLink>
        <NavLink className="navbar-link" href="register">
          Inscription
        </NavLink>
      </Nav>
    </div>
  );
}

export default Navbar;
