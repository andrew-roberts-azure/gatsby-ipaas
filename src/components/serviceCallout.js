import React, { Component } from 'react'
import { Container, Row, Col, ListGroup, Item } from 'react-bootstrap'

class ServiceCallout extends Component {
  render() {
    return (
      <div className="serviceCalloutHolder">
        <Container>
          <div className="serviceCalloutSec">
            <h4>Why other platforms like us are a complete chaos </h4>
            <div className="calloutHolder">
              <Row>
                <Col xs={6} md={4}>
                  <div className="calloutBlock">
                    <h6>Custom-built</h6>
                    <ul>
                      <li>Impossible to scale</li>
                      <li>Cost to maintain is too high</li>
                      <li>Not flexible</li>
                      <li>Very slow</li>
                      <li>
                        Requires coding and consulting from multiple vendors
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="calloutBlock">
                    <h6>
                      HIP <small>Hybrid Integration Platform</small>
                    </h6>
                    <ul>
                      <li>Reinforces multi-agency dependency</li>
                      <li>Limited flexibility</li>
                      <li>Not adaptable</li>
                    </ul>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="calloutBlock">
                    <h6>Enterprise Service Bus</h6>
                    <ul>
                      <li>Too expensive</li>
                      <li>
                        Requires on-premise IT investment and infrastructure
                      </li>
                      <li>Requires highly skilled resources to operate</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default ServiceCallout
