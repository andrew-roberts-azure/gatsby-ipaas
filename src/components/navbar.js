import React, { Component } from 'react'
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap'
import { ReactComponent as Logo } from '../assets/images/ipaas-logo.svg'
import TopLinks from '../components/topLinks'
import { Link } from 'gatsby'

class NavbarPage extends React.Component {
  closeNavbar = () => {
    document.body.classList.remove('menu-toogle')
  }
  handleClick = () => {
    document.body.classList.toggle('menu-toogle')
  }
  showSearch = () => {
    document.body.classList.toggle('show-search')
  }
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="headNav"
      >
        <Container>
          <div className="navbar-brand">
            <Link to="/" className="navbar-brand">
              <Logo />
            </Link>
          </div>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={this.handleClick}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <div className="search d-lg-none w-100 mr-0">
                <input
                  type="text"
                  className="form-control invisible"
                  placeholder="Search"
                />
                <a className="menuClose" onClick={this.handleClick}>
                  <i className="fas fa-times"></i>
                </a>
              </div>
              <div className="d-md-none w-100">
                <Link
                  onClick={this.closeNavbar}
                  activeClassName="active"
                  className="nav-link"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  onClick={this.closeNavbar}
                  activeClassName="active"
                  className="nav-link"
                  to="/company"
                >
                  Company
                </Link>
                <NavDropdown title="Resources" id="basic-nav-dropdown3">
                  <Link
                    onClick={this.closeNavbar}
                    activeClassName="active"
                    className="dropdown-item"
                    to="/resources/demos"
                  >
                    Demos
                  </Link>
                  <Link
                    onClick={this.closeNavbar}
                    activeClassName="active"
                    className="dropdown-item"
                    to="/blog"
                  >
                    Blog
                  </Link>
                  <Link
                    onClick={this.closeNavbar}
                    activeClassName="active"
                    className="dropdown-item"
                    to="/resources/testimonials"
                  >
                    Testimonials
                  </Link>
                </NavDropdown>
                <Link
                  onClick={this.closeNavbar}
                  activeClassName="active"
                  className="nav-link"
                  to="/support"
                >
                  Support
                </Link>
                <Link
                  onClick={this.closeNavbar}
                  activeClassName="active"
                  className="nav-link"
                  to="/free-trial"
                >
                  Contact
                </Link>
                <a
                  onClick={this.closeNavbar}
                  href="http://portal.ipaas.com/#/Login"
                  className="nav-link"
                >
                  Login
                </a>
              </div>
              <Link
                activeClassName="active"
                onClick={this.closeNavbar}
                className="nav-link"
                to="/why-ipaas"
              >
                Why iPaaS.com
              </Link>
              <NavDropdown title="Platform" id="basic-nav-dropdown">
                <Link
                  activeClassName="active"
                  onClick={this.closeNavbar}
                  className="dropdown-item"
                  to="/platform/overview"
                >
                  Overview
                </Link>
                <Link
                  activeClassName="active"
                  onClick={this.closeNavbar}
                  className="dropdown-item"
                  to="/platform/open-api"
                >
                  Open API First
                </Link>
                <Link
                  activeClassName="active"
                  onClick={this.closeNavbar}
                  className="dropdown-item"
                  to="/platform/platform-infrastructure"
                >
                  Platform Infrastructure
                </Link>
                <Link
                  activeClassName="active"
                  onClick={this.closeNavbar}
                  className="dropdown-item"
                  to="/platform/integration-features"
                >
                  Integration Features
                </Link>
                <Link
                  activeClassName="active"
                  onClick={this.closeNavbar}
                  className="dropdown-item"
                  to="/platform/platform-features"
                >
                  Platform Features
                </Link>
              </NavDropdown>
              <Link
                activeClassName="active"
                onClick={this.closeNavbar}
                className="nav-link"
                to="/solution-retail"
              >
                Solutions
              </Link>
              <Link
                activeClassName="active"
                onClick={this.closeNavbar}
                className="nav-link"
                to="/applications"
              >
                Applications
              </Link>
              <NavDropdown title="Partners" id="basic-nav-dropdown2">
                <Link
                  activeClassName="active"
                  onClick={this.closeNavbar}
                  className="dropdown-item"
                  to="/partners/overview"
                >
                  Overview
                </Link>
                <Link
                  activeClassName="active"
                  onClick={this.closeNavbar}
                  className="dropdown-item"
                  to="/partners/become-a-partner"
                >
                  Become a Partner
                </Link>
                <Link
                  activeClassName="active"
                  onClick={this.closeNavbar}
                  className="dropdown-item"
                  to="/partners/tech-partners"
                >
                  Tech Partners
                </Link>
                <Link
                  activeClassName="active"
                  onClick={this.closeNavbar}
                  className="dropdown-item"
                  to="/partners/certified-partners"
                >
                  Certified MISP
                </Link>
              </NavDropdown>
              <Link
                activeClassName="active"
                onClick={this.closeNavbar}
                className="nav-link"
                to="/platform/pricing"
              >
                Pricing
              </Link>
              <Link
                to="/free-trial"
                className="mt-0 mb-0 btn btn-outline-warning btn-lg"
              >
                Request Demo
              </Link>
              <a className="d-none ml-3" onClick={this.showSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.535"
                  height="14.019"
                  viewBox="0 0 13.535 14.019"
                >
                  <path
                    id="search"
                    d="M14.313,12.769,10.976,9.3A5.658,5.658,0,1,0,6.644,11.32,5.6,5.6,0,0,0,9.887,10.3l3.362,3.5a.738.738,0,1,0,1.064-1.023ZM6.644,1.477A4.184,4.184,0,1,1,2.461,5.66,4.188,4.188,0,0,1,6.644,1.477Z"
                    transform="translate(-0.984)"
                    fill="#1a1a1a"
                  />
                </svg>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>

        <div className="requestQuote d-md-none d-block">
          <Link to="/free-trial">Request Demo</Link>
        </div>
      </Navbar>
    )
  }
}

export default NavbarPage
