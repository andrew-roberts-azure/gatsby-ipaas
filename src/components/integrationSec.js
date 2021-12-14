import React, { Component } from 'react'
import { Container, Image, Form, Button } from 'react-bootstrap'
import icon from '../assets/images/integrationIcon.svg'
import illustration from '../assets/images/integrate_illu_3.svg'
import { Link } from 'gatsby'

class IntegrationSec extends Component {
  render() {
    return (
      <div className="integrationHolder">
        <Container>
          <div>
            <div className="integrationSec">
              <div className="integrationContentHolder">
                <div className="integrationContent">
                  <h5>Integrate with all your essential applications</h5>

                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <div className="form-flex">
                        <Form.Control
                          type="email"
                          placeholder="What applications do you use?"
                        />
                        <Link
                          to="/applications"
                          className="btn btn-outline-danger"
                        >
                          {' '}
                          Get Started
                        </Link>
                      </div>
                    </Form.Group>
                  </Form>
                  <Link to="/applications" className="d-md-block d-none">
                    View all Integrations
                  </Link>
                </div>
                <div className="integrationIllustration">
                  <Image src={illustration}></Image>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default IntegrationSec
