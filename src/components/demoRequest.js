import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'gatsby'

class DemoRequest extends Component {
  render() {
    return (
      <div className="demoRequestHolder d-md-block d-none">
        <Container>
          <div className="demoRequestSec">
            <h2>Integrations made simple.</h2>
            <Link className="med btn btn-light" to="/free-trial">
              Request a Demo
            </Link>
          </div>
        </Container>
      </div>
    )
  }
}

export default DemoRequest
