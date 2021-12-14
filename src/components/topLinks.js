import React, { Component } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'gatsby'

class TopLinks extends Component {
  render() {
    return (
      <>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/company">
          Company
        </Link>
        <NavDropdown title="Resources" id="basic-nav-dropdown3">
          <Link className="dropdown-item" to="/resources/demos">
            Demos
          </Link>
          <Link className="dropdown-item" to="/blog">
            Blog
          </Link>
          <Link className="dropdown-item" to="/resources/testimonials">
            Testimonials
          </Link>
        </NavDropdown>
        <a
          className="nav-link"
          href="https://developer.ipaas.com"
          target="_blank"
        >
          Developer Tools
        </a>
        <Link className="nav-link" to="/free-trial">
          Contact
        </Link>
        <a
          target="_blank"
          href="http://portal.ipaas.com/#/Login"
          className="nav-link"
        >
          Login
        </a>
      </>
    )
  }
}

export default TopLinks
