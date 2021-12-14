import React, { Component } from 'react'
import { Container, Form, Button, Image } from 'react-bootstrap'
import { Link } from 'gatsby'

class UnderConstruction extends Component {
  render() {
    const { title, image, fluid, styles } = this.props
    return (
      <div className="underConstructionHolder">
        <Container>
          <div className="underConstructionSec text-center">
            <h2>Under Construction</h2>
            <p>Something awesome is in progress</p>
            <Link to="/" className="btn btn-danger">
              Back to Home
            </Link>
          </div>
        </Container>
      </div>
    )
  }
}

export default UnderConstruction
