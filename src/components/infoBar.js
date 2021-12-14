import React, { Component } from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Link } from 'gatsby'

class InfoBar extends Component {
  render() {
    return (
      <Navbar className="defaultBar">
        <Container>
          <p>Integration Platform & Digital Transformation Services</p>
        </Container>
      </Navbar>
    )
  }
}

export default InfoBar
