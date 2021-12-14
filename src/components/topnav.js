import React, { Component } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import TopLinks from '../components/topLinks'
import { Link } from 'gatsby'

class TopnavPage extends Component {
  render() {
    return (
      <Navbar
        className="topNavSp d-md-block d-none"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Nav className="ml-auto">
            <TopLinks></TopLinks>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

export default TopnavPage
