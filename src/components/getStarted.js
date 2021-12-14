import React, { Component } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'

class GetStarted extends Component {
  render() {
    return (
      <div className="demoRequestHolder d-md-block d-none">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={7} lg={6}>
              <div className="getStartedQuote">
                <h2>GET STARTED</h2>
                <p>
                  Get a free consultation from an integration expert and start
                  building today.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={3}
              lg={4}
              className="text-center d-flex align-items-center justify-content-center ml-auto"
            >
              <Link className="med btn btn-light" to="/free-trial">
                CONTACT AN EXPERT
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default GetStarted
